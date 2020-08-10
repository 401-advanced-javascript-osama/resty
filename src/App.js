import React from 'react';
import './design/design.scss';
import './design/variables.scss';
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
import Footer from './components/footer/footer.js'
import Header from './components/header/header.js'
import Form from './components/form/form.js'
import Result from './components/results/index'
import History from './components/history/history.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      result: {},
      history:[],
      fiilForm : {}

    };
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }
  handleForm = (results) => {
    this.setState({ result: results });
  };
  setHistory =(method,url,body)=>{
    let obj = {method,url,body};
    let history = [...this.state.history,obj];
    this.setState({
      history:history
    })
    let hisArray = JSON.stringify(this.state.history);
    localStorage.setItem('history' , hisArray );
  }
  fillFormHandler = (method,url,body) =>{
    this.setState({
      fiilForm:{method,url,body}
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Route exact path='/'>
        <Form fiilForm={this.state.fiilForm} toggleLoading={this.toggleLoading} handler={this.handleForm} setHistory={this.setHistory} />
        <Result result={this.state.result} loading={this.state.loading}/>
        </Route>
        <Route exact path='/history'>
          <History fillFormHandler={this.fillFormHandler}/>
        </Route>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
