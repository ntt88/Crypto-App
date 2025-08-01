import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CryptoCurrencyItem = ({ currency, currencies }) => {
  const navigate = useNavigate();

  console.log('currency:', currency);
  console.log('currencies:', currencies);

  const handleDetails = () => {
    navigate(`/details/${currency.name.toLowerCase()}`, {
      state: { currency, currencies },
    });
  };

  const renderChange = () => {
    if (currency.percent_change_1h < 0) {
      return (
        <>
          <FaChevronDown style={{ color: 'red' }} />
          <span style={{ color: 'red' }}>
            {Math.abs(currency.percent_change_1h)}
            %
          </span>
        </>
      );
    }
    return (
      <>
        <FaChevronUp style={{ color: 'green' }} />
        <span style={{ color: 'green' }}>
          {currency.percent_change_1h}
          %
        </span>
      </>
    );
  };

  return (
    <div
      className="currency-card"
      key={currency.id}
      onClick={handleDetails}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleDetails();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <h2 className="symbol">{currency.symbol}</h2>
      <p className="change">{renderChange()}</p>
    </div>
  );
};

export default CryptoCurrencyItem;
