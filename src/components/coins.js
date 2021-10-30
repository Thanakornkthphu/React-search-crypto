import React from 'react'
import './coins.css'

function Coins({image, name, symbol, price, volume, priceChange, marketcap}) {
    return (
        <div className="coin__Container">
            <div className="coin__Rows">
                <div className="coin">
                    <img src={image} alt="Cryptocurrency" />
                    <h1 className="coin__Name"> {name} </h1>
                    <p className="coin__Symbol"> {symbol} </p>
                </div>
                
                <div className="coin__Data">
                    <p className="coin__Price"> ${price} </p>
                    <p className="coin__Volume"> ${volume.toLocaleString()} </p>
                    <div className="coin__Percent">
                        {priceChange < 0 ? (
                            <p className="coin__Percent" id="red"> {priceChange.toFixed(2)}% </p>
                        ) : (
                            <p className="coin__Percent" id="green"> {priceChange.toFixed(2)}% </p>
                            )}
                    </div>
                    <p className="coin__Marketcap">
                        ${marketcap.toLocaleString()}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Coins
