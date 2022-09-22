import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  getRandomNumber = () => {
    const randomNumber = this.randomNumber()

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="output">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
