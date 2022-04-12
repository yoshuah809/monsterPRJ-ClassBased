import "./styles.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            //console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value;
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <div className="form-group  container mt-4 sm">
          <input
            type="search"
            className="form-control"
            placeholder="search monsters"
            onChange={onSearchChange}
          />
        </div>
        {filteredMonsters.map((monster) => {
          return (
            <h4 key={monster.id}>
              {monster.id}-{monster.name}--{monster.username}
            </h4>
          );
        })}
        <button className="btn btn-outline-primary">Change Name</button>
      </div>
    );
  }
}

export default App;
