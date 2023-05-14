import { useState } from 'react';
import './App.scss'
import Banner from './Componentes/Banner';
import FormDados from "./Componentes/FormDados";
import TabelaReferencia from './Componentes/TabelaReferencia';
import Resultado from './Componentes/Resultado';


function App() {

  const [resultado, setResultado] = useState([])

  const avalicaoFisica = (dados)=>{
    const imc    = parseInt(dados.peso)/(parseInt(dados.altura)/100)**2
    
    const soma5H = parseInt(dados.peitoral) + parseInt(dados.abdominal) + parseInt(dados.coxa)
    const soma5M = parseInt(dados.triceps) + parseInt(dados.suprailiaca) + parseInt(dados.coxa)
    const dc5H   = 1.1093800 - (0.0008267 * soma5H) + (0.0000016 * (soma5H**2)) - (0.0002574 * parseInt(dados.idade))
    const dc5M   = 1.0994921 - (0.0009929 * soma5M) + (0.0000023 * (soma5M**2)) - (0.0001392 * parseInt(dados.idade))
    const pG5H   = ((4.95/dc5H) - 4.50) * 100
    const pG5M   = ((4.95/dc5M) - 4.50) * 100

    const soma7  = parseInt(dados.subescapular) + parseInt(dados.axilar) + parseInt(dados.triceps) + parseInt(dados.coxa) + parseInt(dados.suprailiaca) + parseInt(dados.abdominal) + parseInt(dados.peitoral)
    const dc7H   = 1.11200000 - (0.00043499 * soma7) + (0.00000055 * (soma7**2)) - (0.0002882 * parseInt(dados.idade))
    const dc7M   = 1.0970 - (0.00046971 * soma7) + (0.00000056 * (soma7**2)) - (0.00012828 * parseInt(dados.idade))
    const pG7H   = ((4.95/dc7H) - 4.50) * 100
    const pG7M   = ((4.95/dc7M) - 4.50) * 100

    const pesoGorduraH = (pG7H / 100) * parseInt(dados.peso)
    const pesoGorduraM = (pG7M / 100) * parseInt(dados.peso)
    const lbmH         = parseInt(dados.peso) - pesoGorduraH
    const lbmM         = parseInt(dados.peso) - pesoGorduraM
    
    setResultado({'imc': imc.toFixed(2), 'pG5H': pG5H.toFixed(2), 'pG7H': pG7H.toFixed(2), 'pesoGorduraH': pesoGorduraH.toFixed(2), 'lbmH': lbmH.toFixed(2)})
  }

  return (
    <div className="App">
      <Banner />
      <div className='titulo'>
        <div className='row'>
          <h2>Ficha de Avaliação Física Individual</h2>
          <h3>
            Esta aplicação foi produzida para auxiliar o profissional de Educação Física, seja um profissional de academia ou personal trainer, a avaliar seus alunos.
            O metodo de avaliação utilizado é o protocolo de Pollock, que é validado e amplamente utilizado por avaliadores e pesquisadores, para avaliar adultos (homens e mulheres) saudáveis. 
            As equações de Siri (1956) e Brozek (1963), cit. Pollock & Wilmore (1993), foram utilizadas nesta ficha.
          </h3>
        </div>

        <div className='row'>
          <h2>Tabelas de referência</h2>
          <TabelaReferencia />
        </div>

        <div className='row'>
          <Resultado 
            resultado = {resultado}
          />
        </div>

        <div className='row'>
          <FormDados 
          aoAvaliar = {avaliacao => avalicaoFisica(avaliacao)}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
