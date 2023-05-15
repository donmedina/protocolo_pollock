import './ListaSuspensa.scss'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento=>props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} className='form-select form-select-lg mb-3'>
                <option></option>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
        </div>
    )
}
