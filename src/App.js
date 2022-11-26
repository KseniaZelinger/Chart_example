import logo from './logo.svg';
import './App.css';
import Chart from './components/Line_chart';
import Vertical_chart from './components/Vertical_chart';
import Horizontal_chart from './components/Horizontal_chart';
import Aria_chart from './components/Area_chart';

function App() {
  const dataServer1 = [
    {
      label: 'Dataset 1',
      data: [27, 72, 48, 84, 67, 76, 90],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [39, 97, 73, 65, 12, 28, 100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: [87, 22, 41, 55, 27, 100, 91],
      borderColor: 'yellow',
      backgroundColor: 'orange',
    }
  ]
  const dataServer2 = [
    {
      label: 'Dataset blue',
      data: [27, 72, 48, 84, 67, 76, 90],
      borderColor: 'blue',
      backgroundColor: 'red',
    }
  ]
  const dataServer3 = [
    {
      label: 'Dataset green',
      data: [27, 72, 14, 84, 97, 16, 90],
      borderColor: 'green',
      backgroundColor: 'red',
    }
  ]
  const dataServer4 = [
    {
      label: 'Dataset 1',
      data: [7, 72, 38, 84, 67, 66, 10],
      borderColor: 'brown',
      backgroundColor: 'black',
    },
    {
      label: 'Dataset 2',
      data: [39, 97, 73, 65, 12, 28, 100],
      borderColor: 'red',
      backgroundColor: 'red',
    }
  ]
  const dataServer5 = [
    {
      label: 'Dataset green',
      data: [11, 7, 1, 4, 7],
      borderColor: 'grey',
      backgroundColor: 'black',
    }
  ]
  return (
    <div className="App">
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Chart dataServer={dataServer1} />
        <Chart dataServer={dataServer2} />
        <Chart dataServer={dataServer3} />
        <Chart dataServer={dataServer4} />
        <Chart dataServer={dataServer5} />
        <Vertical_chart />
        <Horizontal_chart />
        <Aria_chart />
      </div>
    </div>
  );
}

export default App;
