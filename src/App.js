import logo from './logo.svg';
import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
//criando o component button com prop aqui esta no mesmo arquivo mas em um caso real será para colocar em outros arquivos
const Button = React.memo(function Button({ incrementButton }) {
  return (
    console.log('Filho renderizou'),
    (
      <button onClick={() => incrementButton(10)} type="button" className="reverseClass">
        Like
      </button>
    )
  );
});

Button.propTypes = {
  incrementButton: P.func,
};

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

  const handleIncrement = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num); //setState com calback, o prev counter foi adicionado como calback para nao usar o count diretametnte
  }, []);

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

  console.log('Pai renderizou');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Likes: {counter}</h1>

        <p>
          <button type="button" className="reverseClass" onClick={handleClick}>
            Reverse
          </button>{' '}
          <Button incrementButton={handleIncrement} />
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
