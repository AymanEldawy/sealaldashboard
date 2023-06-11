import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend
);
export const options = {
  scales: {
    y: [{
      ticks: {
        beginAtZero: true,
        callback: function (value, index, values) {
          return '₺' + value;
        }
      }
    }]
  },
  responsive: true,
  elements: {
    bar: {
      borderWidth: 1,
      categoryPercentage: 0.8, // adjust as needed
      barPercentage: 0.9, // ad
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


const list = [
  { name: 'Total', result: 6, bg: '#094E99' },
  { name: 'commission', result: 17, bg: '#FFF743' },
  { name: 'invoice', result: 9, bg: '#5CAEFF' },
  { name: 'penalty', result: 27, bg: '#EA4958' },
  { name: 'other', result: 7, bg: '#64E84E' },
]


export const ChartProgress = () => {
  const { lang } = useContext(LanguageContext);
  let labels = list?.map(item => fetchWord(item?.name, lang))
  let data = {
    labels,
    datasets: [{
      label: 'value',
      data: list?.map(item => item?.result),
      backgroundColor: list?.map(item => item?.bg),
    }]
  }
  return (
    <div className="flex flex-col h-full">
      {/* <div
        style={{
          width: '400px',
          height: '300px'
        }}
      > */}
      <div className='mt-auto'/>
      <Bar data={data} options={{}} />
      {/* </div> */}
    </div>
  )
}
