import './Rodape.scss'

export const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href="https://www.linkedin.com/in/gmcsrj/" target="_blank">
                <img src='/imagens/lk.png' alt='linkedin'/></a>
                <a href="twitter.com" target="_blank"></a>
                <img src='/imagens/tw.png' alt='Twitter'/>
                <a href="instagram.com" target="_blank"></a>
                <img src='/imagens/ig.png' alt='Instagram'/>  
            </div>
            <div>
                <p>Desenvolvido por Gabriel Medina</p>
            </div>
        </footer>
    )
}
