import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const eventfn = () => {
  console.log('likes clicados');
};

function App() {
  //const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    //this.setState({ reverse: !reverse });
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1); //setState com calback, o prev counter foi adicionado como calback para nao usar o count diretametnte
  };
  //componentDidUpdate - executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });
  //componentDidMount - executa uma vez porque esta sem dependencia, tem a array vazia
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);
  //componentDidMount - executa sempore que a dependencia mudar
  useEffect(() => {
    console.log('likes mudou para', counter);
  }, [counter]);
  //neste caso estamos chamando um eventlistner cada vez que clicarmos no h1, mas cuidado com o lixo que fica na pagina porque sempre que alguma coisa mudar ele soma eventlister
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventfn);
    //componentWillUmount
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventfn);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Likes: {counter}</h1>

        <p>
          <button type="button" className="reverseClass" onClick={handleClick}>
            Reverse
          </button>{' '}
          <button type="button" className="reverseClass" onClick={handleIncrement}>
            like
          </button>
        </p>
      </header>
    </div>
  );
}

//class App extends Component {
//  state = {
//    reverse: false,
//  };
//
//  handleClick = () => {
//    const { reverse } = this.state;
//    this.setState({ reverse: !reverse });
//  };
//
//  render() {
//    const { reverse } = this.state;
//    const reverseClass = reverse ? 'reverse' : '';
//
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//          <button type="button" className="reverseClass" onClick={this.handleClick}>
//            Reverse
//          </button>
//        </header>
//      </div>
//    );
//  }
//}
//
export default App;
