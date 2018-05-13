import React, { Component } from "react";

class AddWorkOut extends Component {
  constructor() {
    super();
    this.state = { muscleGroup: "Chest", numberOfSets: "" };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    this.setState({ muscleGroup: e.target.value });
  }
  render() {
    return (
      <div>
        <label>Select A Muscle Group</label>
        <select
          defaultValue={this.state.muscleGroup}
          onChange={this.handleOptionChange}
        >
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
          <option value="Abs">Abs</option>
        </select>
        <label>Number of exercises: </label>
        <input
          type="text"
          onChange={e =>
            this.setState({
              numberOfSets: e.target.value
            })
          }
          placeholder="Enter a number up to 10"
        />
        {console.log(this.state)}
      </div>
    );
  }
}

export default AddWorkOut;
