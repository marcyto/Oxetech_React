import { useState, createContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebaseconnection.jsx';


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [user, setUser] = useState({});
  const [logado, setLogado] = useState(false)

  useEffect(()=> {

    function loadStorage(){
      
      const userLogado = localStorage.getItem('User')

      if(userLogado){
        setUser(userLogado);
      }
    }
    
    loadStorage();

    console.log(logado);
    console.log(user)

  }, [])

  


  const login = async (usuario, senha) => {
    await signInWithEmailAndPassword(auth, usuario, senha)
    .then((userCredential)=>{
      let data = {
        email:usuario,
        senha:senha
      }
      StorageUser(data);
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
      let data = {
        usuario,
        email,
        idade,
        senha
      }
      StorageUser(data)
 
      console.log("Usuario cadastrado")
    })
    .catch((err)=>{
      console.log(err)
    })

    console.log(user)
  };


  function StorageUser(data){
    localStorage.setItem('User', JSON.stringify(data))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, cadastro }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}
