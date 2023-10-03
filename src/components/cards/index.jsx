
import './cards.css';

export default function Cards({foto, nome, idade, sexo, email}){
    return(
        <div className="cards">
            <div className="img_perfil">
                <img src={foto}/>
            </div>
            <h3>{nome}</h3>
            <p>{idade}</p>
            <p>{sexo}</p>
            <p>{email}</p>
        </div>
    )
}

