import React from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

async function myFunction() {
  // const apiUrl = 'https://api.example.com/data';
  axios.get('https://api.coinlore.net/api/tickers/').then((response) => {
    console.log(response);
  }).catch((err) => console.log(err));
}

const CryptoCurrencyDetails = ({ currency }) => {
  const data = myFunction();
  console.log(data);
  // const navigate = useNavigate();
  console.log(currency);
  return (
    <div>
      <h2 className="symbol">TESTING</h2>
      <p className="change">TEST</p>
    </div>
  );
};

export default CryptoCurrencyDetails;
