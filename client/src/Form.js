import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
    artistName: ''
  };

  this.state = this.initialState

}

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  submitForm = () => {

    this.props.handleSubmitName(this.state);
    this.setState(this.initialState);

  }


  render() {
    const { artistName } = this.state;

    return (
        <form>
          <label htmlFor="name">Enter a musician</label>
          <input
            type="text"
            name="artistName"
            id="artistName"
            value={artistName}
            onChange={this.handleChange} />
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm} />
        </form>

    );
  }


}

export default Form;
