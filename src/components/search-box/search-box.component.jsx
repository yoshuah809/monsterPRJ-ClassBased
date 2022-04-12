import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <div className="form-group  container mt-4 sm">
        <input
          type="search"
          className="form-control"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
