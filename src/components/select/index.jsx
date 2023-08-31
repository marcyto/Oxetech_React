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
                <option>programacao</option>
                <option>FrontEnd</option>
                <option>data Science</option>
                <option>DevOps</option>
                <option>UX e Design</option>
                <option>Mobile</option>
                <option>Inovação e Gestão</option>
            </select>
        </div>
        
    )
}
export default Select;






