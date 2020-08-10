import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'

import App from './App';

class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        {/* <Header/> */}
        <App />
        {/* <Footer/> */}
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
