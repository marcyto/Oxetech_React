import './select.css'

function Select(props){

    const Digitado = (e) => {
        props.alterado(e.target.value);
    }

    return(
        <div className='select_area'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={Digitado}>
                <option hidden>Selecione seu time...</option>
                {props.times.map(time => {
                    return <option key={time}>{time}</option>
                })}
            </select>
        </div>
        
    )
}
export default Select;






