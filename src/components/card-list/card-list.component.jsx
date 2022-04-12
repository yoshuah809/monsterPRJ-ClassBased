import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <h4 key={monster.id}>
              {monster.id}-{monster.name}
            </h4>
          );
        })}
      </div>
    );
  }
}
export default CardList;
