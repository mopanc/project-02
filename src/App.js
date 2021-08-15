import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    //this.setState({ reverse: !reverse });
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

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
