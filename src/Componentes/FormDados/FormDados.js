import { useState } from 'react'
import Button from '../Button'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './FormDados.scss'

export const FormDados = (props) => {

    const [idade, setIdade]                 = useState('')
    const [altura, setAltura]               = useState('')
    const [peso, setPeso]                   = useState('')
    const [sexo, setSexo]                   = useState('')
    const [biceps, setBicpes]               = useState('')
    const [subescapular, setSubescapular]   = useState('')
    const [suprailiaca, setSuprailiaca]     = useState('')
    const [abdominal, setAbdominal]         = useState('')
    const [supraespinhal, setSupraespinhal] = useState('')
    const [coxa, setCoxa]                   = useState('')
    const [panturrilha, setPanturrilha]     = useState('')
    const [peitoral, setPeitoral]           = useState('')
    const [axilar, setAxilar]               = useState('')
    const [triceps, setTriceps]             = useState('')

    const avaliar = (e)=>{
        e.preventDefault()
        props.aoAvaliar({
            idade,
            altura,
            peso,
            sexo,
            biceps,
            subescapular,
            suprailiaca,
            abdominal,
            supraespinhal,
            coxa,
            panturrilha,
            peitoral,
            axilar,
            triceps
        })
        
        setIdade('')
        setAltura('')
        setPeso('')
        setSexo('')
        setBicpes('')
        setSubescapular('')
        setSuprailiaca('')
        setAbdominal('')
        setSupraespinhal('')
        setCoxa('')
        setPanturrilha('')
        setPeitoral('')
        setAxilar('')
        setTriceps('')
    }

    return (
        <section className='form-dados'>
            <form onSubmit={avaliar}>
                <div className='row'>
                    <div className='col'>
                        <CampoTexto 
                        label       = 'Idade'
                        placeholder = 'Digite sua idade...'
                        obrigatorio = {true}
                        aoAlterado  = {valor => setIdade(valor)}
                        valor       = {idade}
                        />
                    </div>
                    <div className='col'>
                        <CampoTexto 
                        label = 'Altura'
                        placeholder = 'Digite sua altura em cm (ex.: 174 cm )...'
                        obrigatorio = {true}
                        aoAlterado  = {valor => setAltura(valor)}
                        valor       = {altura} 
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CampoTexto 
                        label       = 'Peso'
                        placeholder = 'Digite o peso...'
                        obrigatorio = {true}
                        aoAlterado  = {valor => setPeso(valor)}
                        valor       = {peso}
                        />
                    </div>
                    <div className='col'>
                        <ListaSuspensa
                        label       = 'Sexo'
                        obrigatorio = {true}
                        aoAlterado  = {valor => setSexo(valor)}
                        valor       = {sexo}
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
                    obrigatorio = {true}
                    aoAlterado  = {valor => setBicpes(valor)}
                    valor       = {biceps}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Subescapular'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setSubescapular(valor)}
                    valor       = {subescapular}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Suprailiaca'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setSuprailiaca(valor)}
                    valor       = {suprailiaca}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Abdominal'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setAbdominal(valor)}
                    valor       = {abdominal}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Supraespinhal'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setSupraespinhal(valor)}
                    valor       = {supraespinhal}
                    />
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Coxa'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setCoxa(valor)}
                    valor       = {coxa}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Panturrilha'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setPanturrilha(valor)}
                    valor       = {panturrilha}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Peitoral'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setPeitoral(valor)}
                    valor       = {peitoral}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Axilar Média'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setAxilar(valor)}
                    valor       = {axilar}
                    />
                    </div>
                    <div className='col'>
                    <CampoTexto 
                    label       = 'Tríceps'
                    placeholder = 'Digite o valor...'
                    obrigatorio = {true}
                    aoAlterado  = {valor => setTriceps (valor)}
                    valor       = {triceps}
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
