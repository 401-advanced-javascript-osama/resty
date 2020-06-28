import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {methode : '' , url : ''};
      this.methode = '';
      this.url = '';
    }
    
    handleChangeUrl = (e) => {
        const url = e.target.value;
        this.url = url
       };
    handleChangeMethod = (e) => {
        const methode = e.target.value;
        this.methode = methode;
    };
    handleClick = (e) => {
      this.setState({methode : this.methode , url : this.url})
    };
    render() {
      return (
        < main className="main">
            <div className="url">
          <label>URL:</label>
          <input type="text" onChange={this.handleChangeUrl} />
          <button onClick={this.handleClick}>GO!</button>
          <br/>
            </div>
            <div className="method">
          <input onChange={this.handleChangeMethod} type="radio" id="get" name="methode" value="GET"/>
          <label>GET</label>
           
          <input onChange={this.handleChangeMethod} type="radio" id="post" name="methode" value="POST"/>
          <label>POST</label>
          
          <input onChange={this.handleChangeMethod} type="radio" id="put" name="methode" value="PUT"/>
          <label>PUT</label>
          
          <input onChange={this.handleChangeMethod} type="radio" id="delete" name="methode" value="DELETE"/>
          <label>DELETE</label>
            </div>

          <div className ='result'>
            {this.state.methode} {this.state.url}
          </div>
        </main>
      );
    }
  }

export default Form;
