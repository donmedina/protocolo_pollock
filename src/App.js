import './App.scss'
import Banner from './Componentes/Banner';
import FormDados from "./Componentes/FormDados";


function App() {
  return (
    <div className="App">
      <Banner />
      <section className='titulo'>
        <h2>Ficha de Avaliação Física Individual</h2>
        <h3>
          Esta aplicação foi produzida para auxiliar o profissional de Educação Física, seja um profissional de academia ou personal trainer, a avaliar seus alunos.
          O metodo de avaliação utilizado é o protocolo de Pollock, que é validado e amplamente utilizado por avaliadores e pesquisadores, para avaliar adultos (homens e mulheres) saudáveis. 
          As equações de Siri (1956) e Brozek (1963), cit. Pollock & Wilmore (1993), foram utilizadas nesta ficha.
        </h3>
      </section>
      <section className='formularios'>
        <FormDados/>
      </section>
    </div>
  );
}

export default App;
