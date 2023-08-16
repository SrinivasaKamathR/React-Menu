import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("contructor");
  }

  componentDidMount() {
    console.log("Component Did Mount It is called in after render");
  }

  componentWillUnmount() {
    console.log("component will Unmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Profile Class {this.props.name} </h1>
        <h3>Class Count:-- {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
