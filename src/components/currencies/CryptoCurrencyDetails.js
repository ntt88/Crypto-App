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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: {
        January: 614, February: 704, March: 544, April: 243, May: 790, June: 235, July: 969,
      },
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: {
        January: 614, February: 704, March: 544, April: 243, May: 790, June: 235, July: 969,
      },
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

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
  console.log('data:', data);
  const BTC = findCurrencey('BTC', currencies);
  console.log(BTC);
  return (
    <Bar options={options} data={data} />
  );
};

export default CryptoCurrencyDetails;
