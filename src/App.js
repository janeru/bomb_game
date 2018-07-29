import React, { Component } from 'react';
import './App.css';
const CIRCLE = 5
const arrayBox = []
const arrayInnerCircle = []
for (let i = 0; i < CIRCLE; i++) {
  arrayBox.push(i)
  arrayInnerCircle.push(i + 1)
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arrayBombRed: [],
      bgColor: '#81b71a',
      count: 0
    }

  }

  componentWillMount() {
    const arrayBomb = []

    while (arrayBomb.length < CIRCLE) {
      const randomBomoNum = Math.floor(Math.random() * CIRCLE * CIRCLE) + 1
      if (arrayBomb.includes(randomBomoNum)) {
        arrayBomb
      } else {
        arrayBomb.push(randomBomoNum)
      }
    }
    this.setState({ arrayBombRed: arrayBomb })
  }
  clickCircle = (clickNum) => (e) => {
    const { count } = this.state
    const { arrayBombRed } = this.state
    if (arrayBombRed.includes(clickNum)) {
      e.target.style.backgroundColor = '#E9573F'
      this.setState({ count: count + 1 })
    } else {
      e.target.style.backgroundColor = '#81b71a'

    }

  }

  render() {
    const { count } = this.state
    return (
      <div className="App">
        {count === 5 ? (<div>本局結束</div>) : (
          <div>
            <header className="App-header">
            </header>
            <section>
              {
                arrayBox.map((box, i) => {
                  return <div key={i} className="box">
                    {arrayInnerCircle.map((innerCircle, i) => {
                      return <div key={i} className="circle" onClick={this.clickCircle(innerCircle + CIRCLE * box)} style={{ backgroundColor: '#81b71a' }}></div>
                    })}
                  </div>
                })
              }
            </section>
          </div>)}
      </div>
    );
  }
}

export default App;
