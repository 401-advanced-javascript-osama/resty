import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header/>
        <App />
        <Footer/>
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
