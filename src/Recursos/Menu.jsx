import React from "react";

class menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Primer Nombre",
            lastName:"segundo nombre",
            avatarURL:"sin imagen"
        };
     }

  render() {
    const { name, lastName, avatarURL } = this.props;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Person Card</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <div>
            {name}
            {lastName}
            </div>
            <img src={avatarURL}></img>
          </ul>
        </nav>
      </div>
    );
  }
}

export default menu;