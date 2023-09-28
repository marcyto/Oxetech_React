import { useState, createContext } from "react";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebaseconnection.jsx';


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [user, setUser] = useState({ });



  const login = async (usuario, senha) => {
    await signInWithEmailAndPassword(auth, usuario, senha)
    .then((userCredential)=>{
      console.log("LOGOU")
    })
    .catch((error)=>{
      console.log(error)
    })
    
  };
  const logout = () => {  
    console.log("logout");
  };

  const cadastro = (usuario, email, idade, senha) => {
    setUser({
        nome:usuario,
        email:email,
        idade:idade,
        senha:senha
    })
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential)=>{
      console.log("Usuario cadastrado")
      const usuario = userCredential.user
      console.log(usuario);
    })
    .catch((err)=>{
      console.log(err)
    })

    console.log(user)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, cadastro }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}
