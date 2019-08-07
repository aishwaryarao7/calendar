import React, { Component } from "react";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.setReminder(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Set Reminder</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Event title:
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Reminder;