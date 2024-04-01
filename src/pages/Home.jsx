import React from "react"
import { Link } from 'react-router-dom'
import homeStore from "../stores/homeStore"
import Header from "../components/Header"
import Listitem  from '../components/Listitem'

export default function Home() {
  const store = homeStore()
  
  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Search for a coin</h2>
          <input type="text" value={store.query} onChange={store.setQuery} />
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
          <h2>Trending Coins</h2>
          <div className="home-cryptos-list">
            {store.coins.map(coin => {
              return (
                <Listitem key={coin.id} coin={coin} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
