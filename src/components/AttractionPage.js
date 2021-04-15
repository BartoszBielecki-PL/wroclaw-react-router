import React from "react";
import Attraction from "./Attraction";
import { Link } from "react-router-dom";

class AttractionPage extends React.Component {
  state = {
    description: "",
    name: "",
  };

  componentDidMount() {
    const { description, name } = this.props.location.state;
    this.setState({
      description,
      name,
    });
  }

  render() {
    return (
      <main>
        <Attraction
          name={this.state.name}
          description={this.state.description}
        />
        <Link to="/attractions">Back to Attractions</Link>
      </main>
    );
  }
}

export default AttractionPage;
