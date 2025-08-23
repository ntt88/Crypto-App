import React from 'react';
import { useLocation } from 'react-router-dom';

const findCurrencey = (symbol, currencies) => {
  console.log(symbol);
  console.log(currencies);
  const keys = Object.keys(currencies);
  console.log(keys);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(currencies[i].symbol);
    if (currencies[i].symbol === symbol) {
      return currencies[i];
    }
  }
  return null;
};

const CryptoCurrencyDetails = () => {
  const location = useLocation();
  const { currency, currencies } = location.state;
  console.log('currency:', currency);
  console.log('currencies:', currencies);
  const curr = findCurrencey('BTC', currencies);
  console.log(curr);
  return (
    <div>
      <h2 className="symbol">
        {currency.name}
      </h2>
      <p className="change">
        Market Cap: $
        {currency.market_cap_usd}
      </p>
      <h2 className="symbol">
        { parseFloat(((currency.market_cap_usd / curr.market_cap_usd) * 100).toFixed(3)) }
        % of Bitcoins Market Cap in USD
      </h2>
    </div>
  );
};

export default CryptoCurrencyDetails;
