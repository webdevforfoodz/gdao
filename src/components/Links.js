import React from 'react'
import uniswap from '../assets/uniswap2.png'
import coingecko from '../assets/coingecko2.png'
import dextools from '../assets/dextools2.png'

function Links() {
    
    return (
        <div>
            <ul className="first-section-links" >
                <a href="https://www.dextools.io/app/uniswap/pair-explorer/0x4d184bf6f805ee839517164d301f0c4e5d25c374" rel="noreferrer" target="_blank"><img src={dextools} alt=""/></a>
                <a href="https://www.coingecko.com/en/coins/governor-dao"  rel="noreferrer" target="_blank"><img src={coingecko} alt=""/></a>
                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x515d7e9d75e2b76db60f8a051cd890eba23286bc" rel="noreferrer" target="_blank"><img src={uniswap} alt=""/></a>
            </ul>
        </div>
    )
}

export default Links;
