import React from "react";
import Attraction from "./Attraction";
import "./AttractionPage.sass";
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
        <div className="wrapAttraction">
          <Attraction
            name={this.state.name}
            description={this.state.description}
          />
          <Link to="/attractions" className="back">
            Back to Attractions
          </Link>
        </div>
      </main>
    );
  }
}

export default AttractionPage;
