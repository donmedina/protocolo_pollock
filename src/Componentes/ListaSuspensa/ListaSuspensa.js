import './ListaSuspensa.scss'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                <option></option>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
        </div>
    )
}
