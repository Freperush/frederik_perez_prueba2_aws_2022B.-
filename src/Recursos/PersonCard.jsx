import React from "react";

class PersonCard extends React.Component {
    constructor(props) {
        
    super(props);
    this.state = {
    nota1: props.nota1,
    nota2: props.nota2,
    name: props.name,

    };
    }



    handlerSelect(props){
        props.updateMenu(this.props.name, this.props.avatarURL)
       }


    render() {
    return (
    
   
    <tr>
              <td> {this.state.name}</td>
              <td>{this.state.nota1}</td>
              <td>{this.state.nota2}</td>
              <td>{(this.state.nota1+this.state.nota2)/2}</td>

    </tr>
   
    );
    }
    }
    
    export default PersonCard;