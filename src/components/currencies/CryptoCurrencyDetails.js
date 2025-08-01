import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
/*
async function myFunction() {
  let data;
  // const apiUrl = 'https://api.example.com/data';
  axios.get('https://api.coinlore.net/api/tickers/').then((response) => {
    console.log(response);
    data = response;
  }).catch((err) => console.log(err));
  return data;
}
*/

const CryptoCurrencyDetails = () => {
  const location = useLocation();
  const { currency, currencies } = location.state;
  // const navigate = useNavigate();
  console.log('currency:', currency);
  console.log('currencies:', currencies);
  return (
    <div>
      <h2 className="symbol">TESTING</h2>
      <p className="change">TEST</p>
    </div>
  );
};

export default CryptoCurrencyDetails;
