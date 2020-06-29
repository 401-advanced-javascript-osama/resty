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

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.url && this.state.methode) {
      let request = {
        url: this.state.url,
        method: this.state.methode,
      };
      let url = '';
      let methode = '';
      this.setState({ request, url, methode });
      e.target.reset();

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
        <div className='result'>
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </div>
      </main>
    );
  }
}

export default Form;
