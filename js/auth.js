import {config} from "./config.js?v=1.0.7";
export const authEnabled = config.accountsEnabled === true && /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.supabaseUrl) && config.supabasePublishableKey.length>20 && Boolean(config.privacyContact);
let clientPromise,currentUser=null;
function accountError(error,fallback){
 if(error.status===429||["over_email_send_rate_limit","over_request_rate_limit"].includes(error.code))return new Error("Se han realizado demasiadas solicitudes. Espera unos minutos antes de volver a intentarlo.");
 if(error.status>=500||error.code==="unexpected_failure")return new Error("El servicio de cuentas tiene un problema temporal. Inténtalo más tarde; no necesitas cambiar tus datos.");
 if(error.name==="AuthRetryableFetchError")return new Error("No se pudo conectar con el servicio de cuentas. Comprueba tu conexión e inténtalo de nuevo.");
 if(error.code==="weak_password")return new Error("Elige una contraseña única de al menos 12 caracteres.");
 return new Error(fallback);
}
export const getUser=()=>currentUser;
async function client(){
 if(!authEnabled)throw new Error("El servicio de cuentas está temporalmente en mantenimiento.");
 if(!clientPromise)clientPromise=import("https://esm.sh/@supabase/supabase-js@2.119.2").then(({createClient})=>{
  const db=createClient(config.supabaseUrl,config.supabasePublishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:"pkce"}});
  db.auth.onAuthStateChange((event,session)=>{
   currentUser=session?.user??null;
   setTimeout(()=>window.dispatchEvent(new CustomEvent("isotopo:auth",{detail:{event,user:currentUser}})),0);
  });
  return db;
 }).catch(e=>{clientPromise=null;throw e;});
 return clientPromise;
}
export async function initAuth(){
 if(!authEnabled)return null;
 const db=await client();const {data,error}=await db.auth.getUser();
 if(error&&error.name!=="AuthSessionMissingError")throw new Error("No se pudo verificar la sesión. Inténtalo de nuevo.");
 currentUser=data?.user??null;return currentUser;
}
export async function signIn(email,password){
 const {error}=await (await client()).auth.signInWithPassword({email,password});
 if(error)throw accountError(error,"No se pudo iniciar sesión. Revisa tus datos y confirma tu correo.");
}
export async function signUp(name,email,password){
 const {data,error}=await (await client()).auth.signUp({email,password,options:{data:{display_name:name},emailRedirectTo:config.siteUrl}});
 if(error)throw accountError(error,"No se pudo crear la cuenta. Revisa tus datos o inténtalo más tarde.");
 return Boolean(data.session);
}
export async function resetPassword(email){
 const {error}=await (await client()).auth.resetPasswordForEmail(email,{redirectTo:config.siteUrl+"?recovery=1"});
 if(error)throw accountError(error,"No se pudo enviar la solicitud. Inténtalo más tarde.");
}
export async function updatePassword(password){
 if(!currentUser)throw new Error("Abre primero el enlace de recuperación de tu correo.");
 const {error}=await (await client()).auth.updateUser({password});
 if(error)throw accountError(error,"No se pudo actualizar la contraseña.");
}
export async function signOut(){
 const {error}=await (await client()).auth.signOut();if(error)throw new Error("No se pudo cerrar la sesión.");
 currentUser=null;
}
export async function readLearning(){
 if(!currentUser)return [];
 const {data,error}=await (await client()).from("learning").select("course_id,saved,status").eq("user_id",currentUser.id);
 if(error)throw new Error("No se pudo cargar tu aprendizaje.");return data;
}
export async function writeLearning(courseId,changes){
 if(!currentUser)throw new Error("Inicia sesión para sincronizar tu aprendizaje.");
 const {error}=await (await client()).from("learning").upsert({user_id:currentUser.id,course_id:courseId,...changes},{onConflict:"user_id,course_id"});
 if(error)throw new Error("No se pudieron guardar los cambios.");
}
export async function readResources(courseId){
 if(!currentUser)return [];
 const {data,error}=await (await client()).from("course_resources").select("id,title,body,position").eq("course_id",courseId).order("position");
 if(error)throw new Error("No se pudieron cargar las guías de estudio.");return data;
}
