import './Resultado.scss'

export const Resultado = (props) => {
    return (
        <div className='col'>
            <div className='item row'>
                <h3>Resultados da avaliação</h3>
            <div className='col'>
                <label>IMC</label>
                <strong>{props.resultado['imc']}</strong>
            </div>
            <div className='col'>
                <label>%G 5 dobras</label>
                <strong>{props.resultado['pG5H']}</strong>
            </div>
            <div className='col'>
                <label>%G 7 dobras</label>
                <strong>{props.resultado['pG5H']}</strong>
            </div>
            <div className='col'>
                <label>Peso de Gordura</label>
                <strong>{props.resultado['pesoGorduraH']}</strong>
            </div>
            <div className='col'>
                <label>Peso Massa Magra</label>
                <strong>{props.resultado['lbmH']}</strong>
            </div>
        </div>
        </div>
    )
}
