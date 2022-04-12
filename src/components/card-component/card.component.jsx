import { Component } from "react";

class CardComponent extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, email, name } = monster;
          return (
            <div className="card-container" key={id}>
              <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardComponent;
