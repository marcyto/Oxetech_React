import './select.css'

function Select(props){
    return(
        <div className='select_area'>
            <label>{props.label}</label>
            <select >
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






