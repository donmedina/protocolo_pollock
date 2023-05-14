import Button from '../Button'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './FormDados.scss'

export const FormDados = () => {
    return (
        <section className='form-dados'>
            <form>
                <div className='row'>
                    <div className='col'>
                        <CampoTexto 
                            label       = 'Idade'
                            placeholder = 'Digite sua idade...' 
                        />
                    </div>
                    <div className='col'>
                        <CampoTexto 
                            label = 'Altura'
                            placeholder = 'Digite sua altura em cm (ex.: 174 cm )...'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CampoTexto 
                            label       = 'Peso'
                            placeholder = 'Digite o peso...'
                        />
                    </div>
                    <div className='col'>
                        <ListaSuspensa
                            label = 'Sexo'
                        />
                    </div>
                </div>

                <div className='row'>
                    <h3>Dobras Cutâneas (mm)</h3>
                </div>

                <div className='row'>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Bíceps'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Subescapular'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Suprailiaca'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Abdominal'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Supraespinhal'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Coxa'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Panturrilha'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Peitoral'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Axilar Média'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Tríceps'
                    placeholder = 'Digite o valor...'
                    />
                    </div>
                </div>
                
                <Button>
                    Avaliar
                </Button>
            </form>
        </section>
    )
}
