import React, {Component} from 'react'
import Table from './Table.js'
import Form from './Form.js'



class App extends Component {
  state = {
    names: [],
    responses: []
  }

  handleSubmitName = (name) => {
    this.setState({names: [...this.state.names, name]})

    let requestCount = this.state.names.length

    if (requestCount < 4) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state.names[requestCount-1])
      };

      fetch('/api', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ responses: [...this.state.responses, { recommended_artist: data.recommended_artist, album_name: data.album_name, release_date: data.release_date, album_image: data.album_image.url } ]}))
    }

  };

  render() {
    const { responses } = this.state;

    const inputSize = this.state.responses.length;
    let inputForm;
    if (inputSize < 3) {
      inputForm = <Form handleSubmitName={this.handleSubmitName} />
    } else if (inputSize == 3) {
      if (this.state.responses[0].recommended_artist == this.state.responses[1].recommended_artist &&
        this.state.responses[1].recommended_artist == this.state.responses[2].recommended_artist) {
        inputForm = ' 🎉🎉🎉 You won!!! Refresh to play again.'
      } else {
        inputForm = '😭😭😭 You lost...Refresh to try again'
      }
    }

    return (
      <div id="parent" className="body">
        <div className="container">
          <Table responsesData={responses} />
        </div>
        <div className="small-container">
          {inputForm}
        </div>
      </div>
    )
  }
}

export default App
