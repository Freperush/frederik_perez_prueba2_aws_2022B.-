

import React, { Component } from "react";
import './estilos/formu.css';
import './estilos/tabla.css';
import './App.css';

import PersonCard from './Recursos/PersonCard';
import Menu from './Recursos/Menu';
import Input from './Recursos/Input';
import  {personListData} from './Datos/personListData';
import ReactTable from "react-table";

class App extends Component {

  updateMenu(updatedName, updatedAvatarURL){
    this.setState({name: updatedName, avatarURL:updatedAvatarURL });
  }
  AddLista(addName,addnota1,addnota2){
    this.setState({personListData: [...this.state.personListData, {nota2:parseInt(addnota2),nota1:parseInt(addnota1), name:addName}] });
    console.log(this.state)
  }
  


  constructor(props){
    super(props);
    this.state = {
    name: 'aa',
    lastName:"bb",
    avatarURL: 'https://c8.alamy.2G7FT77.jpg',
    personListData: personListData
    }
    this.updateMenu = this.updateMenu.bind(this);
    this.AddLista = this.AddLista.bind(this);

    }
  

  render() {
  
    return (
      <div className="App">

        <Input AddLista= {this.AddLista} ></Input>
        
     <div class="tabla" ><p>Lista de Estudiantes</p></div>
     <div class="tabla">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nota1</th>
              <th>Nota2</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {this.state.personListData.map((person, index) =>(
  <PersonCard  key={index} name= {person.name} nota1 = {person.nota1} nota2 ={person.nota2 }  updateMenu ={this.updateMenu}/>
  
          
  )
  )}
         
          </tbody>
        </table>
        </div>
       


      </div>
    );
  }
}

export default App;