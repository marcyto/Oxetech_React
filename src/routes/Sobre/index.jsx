import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import Cards from "../../components/cards";
import './sobre.css'

export default function Sobre() {

  const [data, setData] = useState([])

  const HandleFetch = async () => {
    await axios.get("https://randomuser.me/api/?results=20")
    .then((response)=>{
      setData(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    HandleFetch()

  },[])

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container sobre_area">
        {data.map((item) => {
          return(
            <Cards 
              key={item.cell} 
              foto={item.picture.medium} 
              nome={item.name.first}
              idade={item.dob.age}
              email={item.email}
              sexo={item.gender}
            />
          )
        })}
        
      </div>
      <Footer />
    </div>
  );
}








/*

import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import axios from "axios";

export default function Sobre() {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    await axios.get("https://randomuser.me/api/?results=20")
        .then((response) => {
            setData(response.data.results);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container">
        {data.map((item) => {
            return(
                <div key={item.cell}>
                    
                    <p>{item.name.first}</p>
                </div>
            )
          
          console.log(item);
        })}
      </div>
      <Footer />
    </div>
  );
}
*/
















