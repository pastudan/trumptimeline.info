import React, { Component } from 'react'
import logo from './logo.svg'
import events from './events'

import './App.css'

const categories = ['all', 'education', 'departures', 'foreign', 'domestic', 'trade']
const originDate = 2016

class App extends Component {
  state = {
    category: 'all',
    zoom: 0
  }

  render() {
    const { category } = this.state
    const filteredEvents = events.filter(event => event.category === category)

    const markers = [{ year: 2016 }, { year: 2017 }, { year: 2018 }]
    const max = 2018

    return (
      <div className="App">
        <header className="App-header">
          {categories.map(catIndex => (
            <div className={catIndex === category ? 'active' : ''}>{catIndex}</div>
          ))}
        </header>
        <section className="App-section">
          {markers.map(({ year }) => (
            <div
              className="date"
              style={{
                top: `calc(${((year - originDate) / (max - originDate)) * 100 + '%'} - 1vh)`
              }}
            >
              {year}
            </div>
          ))}
          {filteredEvents.map(({ title, description, weight, icon, time }) => {
            return (
              <div
                style={{
                  top: '10px',
                  height: weight,
                  width: weight
                }}
              >
                <img src={icon} alt="icon" />
                <h2>
                  {title}
                  <span className="time">{time}</span>
                </h2>
                <p>{description}</p>
              </div>
            )
          })}
        </section>
      </div>
    )
  }
}

export default App
