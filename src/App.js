import React, { Component } from 'react';
import StockInfo from './components/Stockinfo'
import { loadQuoteForStock, loadLogoForStock } from './api/iex'
import './App.css';

class App extends Component {
  state = {
    error: null,
    enteredSymbol: 'nflx',
    quote: null,
    logoURL: null
  }

  // The first time our component is rendered, this method is called
  componentDidMount() {
    this.loadQuote()
  }

  loadQuote = () => {
    const { enteredSymbol } = this.state
    loadQuoteForStock(enteredSymbol)
      .then((quote) => {//using .then because the request will take some time to fetch
        //from the api server
        this.setState({
          quote: quote,
          error: null
        })
      })
      .catch((error) =>{
        this.setState({error: error})
        console.error(`The stock symbol '${enteredSymbol}' does not exist`, error)
      })
    loadLogoForStock(enteredSymbol)
      .then((logo) => {
        this.setState({ logoURL: logo.url })
        console.log('logo:', logo.url)
      })
      .catch((error) => {
        console.error(`The logo for '${enteredSymbol}' is not available`, error)        
      })
  }

  onChangeEnteredSymbol = (event) => {
    const input = event.target
    const value = input.value.trim().toUpperCase()
    this.setState({ enteredSymbol: value })
  }

  render() {
    // const quote = this.state.quote
    const { error, enteredSymbol, logoURL, quote } = this.state

    return (
      <div className="App">
        <h1>Wolf of React</h1>
        <img src={ logoURL } alt={ `logo for ${ enteredSymbol }` } />
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
        <input 
          value={ enteredSymbol }
          placeholder='Symbol e.g. nflx' 
          aria-label='Symbol'
          onChange={ this.onChangeEnteredSymbol }
        />
        <button
          onClick={ this.loadQuote }
        >
          Load quote
        </button>
      </div>
    );
  }
}

export default App;
