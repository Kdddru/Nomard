import React, { useEffect, useState } from 'react'

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);


  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[])

  
  return (
    <div>
      <h1>The Coin({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : ''}
      <select>
        {coins && coins.map((coin,i)=>(
          <option key={i}>{coin.name}({coin.symbol} : {coin.quotes.USD.price})</option>
        ))}
      </select>
    </div>
  )
}
