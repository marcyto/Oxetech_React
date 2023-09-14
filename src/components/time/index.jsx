
import Colaborador from '../colaborador';
import './time.css';

function Time(props) {

    const cssFundo = { backgroundColor: props.fundo }
    const cssCard = { borderColor: props.card }


    return (


        (props.colaboradores.length > 0) ?

            <section className="time" style={cssFundo}>
                <h2 style={cssCard}>{props.nome}</h2>
                <div className="timeCards">
                    {props.colaboradores.map(colaborador => <Colaborador corCard={props.card} colaborador={colaborador} />)}
                </div>
            </section>

        : ''

        
    )
}

export default Time;