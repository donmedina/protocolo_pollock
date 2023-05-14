import './ListaSuspensa.scss'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select className='form-select form-select-lg mb-3'>
                <option></option>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
        </div>
    )
}
