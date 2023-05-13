import Button from '../Button'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './FormDados.scss'

export const FormDados = () => {
    return (
        <section className='form-dados'>
            <form>
                <CampoTexto 
                    label       = 'Idade'
                    placeholder = 'Digite sua idade...' 
                />
                <CampoTexto 
                    label = 'Altura'
                    placeholder = 'Digite sua altura em cm ( 174 cm )...'
                />
                <ListaSuspensa
                    label = 'Sexo'
                />
                <CampoTexto 
                    label       = 'Peso'
                    placeholder = 'Digite o peso...'
                />
                <h3>Dobras Cutâneas (mm)</h3>
                <CampoTexto 
                    label       = 'Bíceps'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Subescapular'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Suprailiaca'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Abdominal'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Supraespinhal'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Coxa'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Panturrilha'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Peitoral'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Axilar Média'
                    placeholder = 'Digite o valor...'
                />
                <CampoTexto 
                    label       = 'Tríceps'
                    placeholder = 'Digite o valor...'
                />
                <Button>
                    Avaliar
                </Button>
            </form>
        </section>
    )
}
