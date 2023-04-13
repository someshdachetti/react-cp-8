// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    key: '',
    numberOfWords: 0,
  }

  onText = event => {
    const inputWords = event.target.value

    const numberOfWords = inputWords.length
    this.setState({key: inputWords, numberOfWords})
  }

  render() {
    const {key, numberOfWords} = this.state
    console.log(key)
    return (
      <div className="bg">
        <h1>
          Calculate
          <br /> the Letters you
          <br /> enter
        </h1>
        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt=" letters calculator"
          />
        </div>

        <label htmlFor="id">Enter the phrase</label>
        <input
          placeholder="Enter the phrase"
          type="text"
          onChange={this.onText}
        />

        <p className="white-card">No.of letters: {numberOfWords}</p>
      </div>
    )
  }
}
export default LettersCalculator
