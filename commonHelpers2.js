import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},a=document.querySelector(".feedback-form");function o(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}a.addEventListener("input",t=>{const{name:s,value:m}=t.target;e[s]=m.trim(),o()});document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const s=JSON.parse(t);e.email=s.email.trim(),e.message=s.message.trim(),a.elements.email.value=e.email,a.elements.message.value=e.message}});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset()});
//# sourceMappingURL=commonHelpers2.js.map