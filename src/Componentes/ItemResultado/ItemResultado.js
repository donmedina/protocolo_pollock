import './ItemResultado.scss'

export const ItemResultado = ({imc, pG5, pG7, pesoG, lbm}) => {
    return (
        <div className='row'>
            <div className='col'>
                <label>IMC</label>
                <strong>{imc}</strong>
            </div>
            <div className='col'>
                <label>% Gordura 5 Dobras</label>
                <strong>{pG5}%</strong>
            </div>
            <div className='col'>
                <label>% Gordura 7 Dobras</label>
                <strong>{pG7}%</strong>
            </div>
            <div className='col'>
                <label>Peso de gordura</label>
                <strong>{pesoG}kg</strong>
            </div>
            <div className='col'>
                <label>Peso de massa muscular</label>
                <strong>{lbm}kg</strong>
            </div>
        </div>
    )
}
