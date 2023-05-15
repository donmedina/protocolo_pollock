import { useState } from 'react';
import './App.scss'
import Banner from './Componentes/Banner';
import FormDados from "./Componentes/FormDados";
import TabelaReferencia from './Componentes/TabelaReferencia';
import Resultado from './Componentes/Resultado';
import Rodape from './Componentes/Rodape';


function App() {

  const [resultado, setResultado] = useState([])

  const avalicaoFisica = (dados)=>{
    setResultado([dados])
  }

  return (
    <div className="App">
      <Banner />
      <div className='col titulo'>
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

        <div className='row'>
          <Rodape />
        </div>

      </div>
    </div>
  );
}

export default App;
