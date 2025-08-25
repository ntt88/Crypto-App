import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const CryptoCurrencyDetails = () => {
  const location = useLocation();
  const { currency, currencies } = location.state;
  console.log('currency:', currency);
  console.log('currencies:', currencies);
  const labels = ['BTC', 'ETH', 'CRO', 'ADA', 'ATOM', 'SOL', 'LTC'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: {
          BTC: findCurrencey('BTC', currencies).market_cap_usd, ETH: findCurrencey('ETH', currencies).market_cap_usd, CRO: findCurrencey('CRO', currencies).market_cap_usd, ADA: findCurrencey('ADA', currencies).market_cap_usd, ATOM: findCurrencey('ATOM', currencies).market_cap_usd, SOL: findCurrencey('SOL', currencies).market_cap_usd, LTC: findCurrencey('LTC', currencies).market_cap_usd,
        },
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: {
          BTC: findCurrencey('BTC', currencies).market_cap_usd, ETH: findCurrencey('ETH', currencies).market_cap_usd, CRO: findCurrencey('CRO', currencies).market_cap_usd, ADA: findCurrencey('ADA', currencies).market_cap_usd, ATOM: findCurrencey('ATOM', currencies).market_cap_usd, SOL: findCurrencey('SOL', currencies).market_cap_usd, LTC: findCurrencey('LTC', currencies).market_cap_usd,
        },
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const BTC = findCurrencey('BTC', currencies);
  console.log(BTC);
  console.log('data:', data);
  return (
    <Bar options={options} data={data} />
  );
};

export default CryptoCurrencyDetails;
