import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Coins from './components/coins'
import './App.css';


function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(search === ''){
          alert('Please enter name of coin')
        }
            
        coins.filter(coin => {
            coin.name.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
    })
    
    const filteredCoins = (e) => {
        if (search !== "" && e.keyword === 13) {
            coins.filter(coin => {
                return coin.name.toLowerCase().includes(search.toLowerCase())
            })
        }
    }
    
    return (
        <div className="crypto__App">
            <div className="container__App">
                <div className="crypto__Search">
                    <h1> Search a currency</h1>
                    <form onSubmit={onSubmit}>
                        <input 
                        type="text"
                        placeholder="Search" 
                        className="crypto__Input"
                        onChange={handleChange}
                        value={search}
                        />
                    </form>
                </div>

                <div className="header__form">
                    <li id="logo">Logo</li>
                    <li id="name">Name</li>
                    <li id="symbol">Symbol</li>
                    <li id="price">Price</li>
                    <li id="volume">Volume</li>
                    <li id="percent">Percent</li>
                    <li id="marketCap">Market cap.</li>
                </div>   

                {filteredCoins.map((data) => {
                    return (
                        <Coins 
                        key={data.id} 
                        image={data.image} 
                        name={data.name}
                        symbol={data.symbol}
                        price={data.current_price}
                        volume={data.total_volume}
                        priceChange={data.price_change_percentage_24h}
                        marketcap={data.market_cap}
                        />
                    )
                })}

            </div>
        </div>
    );
}

export default App

