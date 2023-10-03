import React from "react";
import './banner.css'
import bannerImg from '../../assets/HeaderHeader_total.png'

function Banner(){
    return(
        <header className="header_banner">
            <img src={bannerImg}/>
        </header>
    )
}

export default Banner;