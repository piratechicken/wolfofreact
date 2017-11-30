import React, { Component } from 'react';
import StockInfo from './components/Stockinfo'
import { loadQuoteForStock } from './api/iex'
import './App.css';


class App extends Component {
  state = {
    error: null,
    quote: null
  }

  // The first time our component is rendered, this method is called
  componentDidMount() {
    loadQuoteForStock('nfx')
      .then((data) => {
        this.setState({ quote: data })
      })
      .catch((error) => {
        if (error.response.status === 404) {
          error = new Error('The stock symbol does not exist')
        }
        console.error(error.message)
        this.setState({ error: error })
      })
  }

  render() {
    // const quote = this.state.quote
    const { error, quote } = this.state

    return (
      <div className="App">
        <h1>Wolf of React</h1>
        {
          !!error &&
            <div className="error">{ error.message }</div>
        }
        {
          !!quote ? (
            <StockInfo 
              { ...quote }
            />
          ) : (
            <div className="loading">... loading ...</div>
          )
        }
      </div>
    );
  }
}

export default App;
