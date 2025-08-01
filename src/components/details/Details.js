import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import CryptoCurrencyDetails from '../currencies/CryptoCurrencyDetails';

import '../../styles/details.css';

const Details = () => {
  const location = useLocation();
  const { currency, currencies } = location.state;

  const navigate = useNavigate();

  console.log('currency:', currency);
  console.log('currencies:', currencies);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleComparison = () => {
    navigate(`/CryptoCurrencyDetails/${currency.name.toLowerCase()}`, {
      state: { currency, currencies },
    });
  };

  const renderChange = (value) => {
    const absValue = Math.abs(value);
    const color = value < 0 ? 'red' : 'green';
    return (
      <span style={{ color }}>
        {absValue}
        %
      </span>
    );
  };

  const formatNumber = (value, maximumFractionDigits) => Number(value).toLocaleString(undefined, {
    maximumFractionDigits,
  });

  return (
    <div className="details-container">
      <div
        className="currency-card"
        key={currency.id}
        onClick={handleComparison}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleComparison();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <h2 className="symbol">{currency.symbol}</h2>
        <p className="change">{renderChange()}</p>
      </div>
      <div
        className="back-arrow"
        onClick={handleBackClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleBackClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <BiArrowBack size={32} />
      </div>

      <h1 className="currency-name">{currency.name}</h1>
      <h4 className="currency-symbol">{currency.symbol}</h4>

      <div className="deets-container">
        <h3 className="deets-title">Coin Details:</h3>
        <div>
          <p className="deets">
            Market Cap: $
            {formatNumber(currency.market_cap_usd, 2)}
          </p>
          <p className="deets">
            Volume (24h): $
            {formatNumber(currency.volume24a, 2)}
          </p>
          <p className="deets">
            Total Supply:
            {' '}
            {formatNumber(currency.tsupply, 2)}

          </p>
          <p className="deets">
            1h %:
            {' '}
            {renderChange(currency.percent_change_1h)}
          </p>
          <p className="deets">
            24h %:
            {' '}
            {renderChange(currency.percent_change_24h)}
          </p>
          <p className="deets">
            7d %:
            {' '}
            {renderChange(currency.percent_change_7d)}
          </p>
          <p className="deets">
            Price (BTC):
            {' '}
            {Number(currency.price_btc).toFixed(2)}
          </p>
          <p className="deets">
            Price (USD): $
            {formatNumber(currency.price_usd, 2)}
          </p>
        </div>
      </div>
      <CryptoCurrencyDetails key={currency.id} currency={currency} />
    </div>
  );
};

export default Details;
