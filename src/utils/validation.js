export const validation = (email,password)=>{
    console.log(email, password);
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const  isPasswordValid =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if (!isEmailValid) return "Email not valid";
if (!isPasswordValid) return "Password not valid";
return null
} 