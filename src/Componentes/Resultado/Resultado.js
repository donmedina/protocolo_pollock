import './Resultado.scss'
import ItemResultado from '../ItemResultado'

export const Resultado = (props) => {

    return (
        (props.resultado.length > 0) &&
        <div className='container'>
            <div className='item row'>
                <h3>Resultados da avaliação</h3>
                {props.resultado.map(item => 
                    <ItemResultado
                        key   = 'resultado' 
                        imc   = {item.imc}
                        pG5  = {item.pG5}
                        pG7  = {item.pG7}
                        pesoG = {item.pesoG}
                        lbm   = {item.lbm}
                    />
                )}
                

            </div>
        </div>
    )
}
