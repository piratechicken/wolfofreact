import React from 'react'

const StockNews = ({
  stockNews,
  companyTitle
}) => {
  return (
    <div className="news">
      <h3>News for { companyTitle }</h3>
      { 
        stockNews.map((item) => {
          return (
            <details>
              <summary>{ item.headline }</summary>
              <p>{ item.summary }...<a href={item.url}>more</a></p>
            </details> 
          )
        }) 
      }
    </div>
  )
}

export default StockNews