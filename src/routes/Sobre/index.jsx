import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { AuthContext } from "../../context/auth";
import axios from "axios";

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
      <div className="container">
        {data.map((item) => {
          return(
            <div key={item.cell}>
              <p>{item.gender}</p>
              <p>{item.name.first}</p>
            </div>
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