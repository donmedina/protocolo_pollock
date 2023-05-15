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
        
        const imc    = (parseInt(peso)/(parseInt(altura)/100)**2).toFixed(2)
    
        const soma5H = parseInt(peitoral) + parseInt(abdominal) + parseInt(coxa)
        const soma5M = parseInt(triceps) + parseInt(suprailiaca) + parseInt(coxa)
        const dc5H   = 1.1093800 - (0.0008267 * soma5H) + (0.0000016 * (soma5H**2)) - (0.0002574 * parseInt(idade))
        const dc5M   = 1.0994921 - (0.0009929 * soma5M) + (0.0000023 * (soma5M**2)) - (0.0001392 * parseInt(idade))
        const pG5H   = (((4.95/dc5H) - 4.50) * 100).toFixed(2)
        const pG5M   = (((4.95/dc5M) - 4.50) * 100).toFixed(2)
    
        const soma7  = parseInt(subescapular) + parseInt(axilar) + parseInt(triceps) + parseInt(coxa) + parseInt(suprailiaca) + parseInt(abdominal) + parseInt(peitoral)
        const dc7H   = 1.11200000 - (0.00043499 * soma7) + (0.00000055 * (soma7**2)) - (0.0002882 * parseInt(idade))
        const dc7M   = 1.0970 - (0.00046971 * soma7) + (0.00000056 * (soma7**2)) - (0.00012828 * parseInt(idade))
        const pG7H   = (((4.95/dc7H) - 4.50) * 100).toFixed(2)
        const pG7M   = (((4.95/dc7M) - 4.50) * 100).toFixed(2)
    
        const pesoGorduraH = ((pG7H / 100) * parseInt(peso)).toFixed(2)
        const pesoGorduraM = ((pG7M / 100) * parseInt(peso)).toFixed(2)
        const lbmH         = parseInt(peso) - pesoGorduraH
        const lbmM         = parseInt(peso) - pesoGorduraM

        const pG5   = (sexo === 'Masculino') ? pG5H : pG5M
        const pG7   = (sexo === 'Masculino') ? pG7H : pG7M
        const pesoG = (sexo === 'Masculino') ? pesoGorduraH : pesoGorduraM 
        const lbm   = (sexo === 'Masculino') ? lbmH : lbmM

        
        
        props.aoAvaliar({
            imc,
            pG5,
            pG7,
            pesoG,
            lbm
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
                        valor       = {idade}
                        aoAlterado  = {valor => setIdade(valor)}
                        />
                    </div>
                    <div className='col'>
                        <CampoTexto 
                        label = 'Altura'
                        placeholder = 'Digite sua altura em cm (ex.: 174 cm )...'
                        obrigatorio = {true}
                        valor       = {altura} 
                        aoAlterado  = {valor => setAltura(valor)}
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
