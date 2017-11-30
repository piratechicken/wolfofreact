import React from 'react'

const SearchHistory = ({
  searchHistory
}) => {

  return (
    <div>
      <h3>Search History</h3>
      <ul>{ 
        searchHistory.map((quote) => {
          return <li>{quote.companyName} ({quote.symbol}, latest price: { quote.latestPrice })</li>
        })
      
      }</ul>
    </div>
  )
}

export default SearchHistory