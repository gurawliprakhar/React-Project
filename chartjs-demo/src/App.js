import React from 'react';
import { Data } from './utils/Data';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Using Chart.js in React</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <PieChart chartData={Data} />
        <BarChart chartData={Data} />
        <LineChart chartData={Data} />
      </div>
    </div>
  );
}

export default App;
