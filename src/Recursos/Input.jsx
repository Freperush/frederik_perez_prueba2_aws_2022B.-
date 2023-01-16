

import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nota1: '',
      name:'',
      nota2: '',
      resul:"esperando",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handlerSelect(props2){
    console.log("props2")
    console.log(this.state)
    if (this.state.nota1 >= 0 && this.state.nota1 <= 10 && this.state.nota2 >= 0 && this.state.nota2 <= 10) {
        props2.AddLista(this.state.name,this.state.nota1,this.state.nota2)
        this.setState({resul: "Correcto"}); 
      } else {
      this.setState({resul: "Fallido"});    }
   }

  render() {
    return (
     
      <div className='user-input' >
        <div>
          <p  >Ingreso de calificaciones</p>
        </div>
        <div className='sepa1'>
        <label  for="name">First name:</label>
        <input className='largo' type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} /><br></br>
        </div>
        
        <div className='sepa2'>
        <label for="nota1">Calificacion 1:  </label>
        <input type='text' placeholder='Nota1' name='nota1' value={this.state.nota1} onChange={this.handleChange} />
        <label for="nota2">Calificacion 1:  </label>
        <input type='text' placeholder='Nota2' name='nota2' value={this.state.nota2} onChange={this.handleChange} />
        </div>
        <p className='texto' >El ingreos fue: {this.state.resul} </p>
        <button onClick={() => this.handlerSelect(this.props)}>AGREGAR</button>
      </div>
    );
  }
}

export default Input;