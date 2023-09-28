import { useState, createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const login = (usuario, senha) => {
    console.log(usuario, senha);
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
    console.log(user)

  };

  return (
    <AuthContext.Provider value={{ user, login, logout, cadastro }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}
