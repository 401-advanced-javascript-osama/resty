import React from 'react';
import './form.scss';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      methode: '',
      url: '',
      request: {}
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.url && this.state.methode) {
        try {
          const raw = await fetch(`${this.state.url}`);
          const data = await raw.json();
          let head ;
          raw.headers.forEach(value =>{
            head = { 'Content-Type': value }
          })          
          let results = {
            Headers: head,
            Response: data
          }
          this.props.handler(results);
        } catch (e) {
          console.log(e);
        }
    }
  };

  handleChangeUrl = (e) => {
    const url = e.target.value;
    this.setState({ url })
  };
  handleChangeMethod = (e) => {
    const methode = e.target.value;
    this.setState({ methode })
  };

  render() {
    return (
      < main className="main">
        <form onSubmit={this.handleSubmit}>
          <label className="url">
            <span>URL:</span>
            <input type="text" id="url"  onChange={this.handleChangeUrl} />
            <input id="submit" type="submit" value ="GO!"/>
          </label>
          <label className="method">
            <input onChange={this.handleChangeMethod} type="radio" id="get" name="methode" value="GET" />
            <label>GET</label>
            <input onChange={this.handleChangeMethod} type="radio" id="post" name="methode" value="POST" />
            <label>POST</label>
            <input onChange={this.handleChangeMethod} type="radio" id="put" name="methode" value="PUT" />
            <label>PUT</label>
            <input onChange={this.handleChangeMethod} type="radio" id="delete" name="methode" value="DELETE" />
            <label>DELETE</label>
          </label>
        </form>
      </main>
    );
  }
}

export default Form;
