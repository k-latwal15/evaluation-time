
import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json'

function App() {
  const [stockResult, setStockResult] = useState([])
  useEffect(() => {
    // fetch('https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=mK9nLBUVP2NCx3K7zCOopk_CrBdQOhhC').then((res) =>
    //   res.json()
    // ).then((response) => {
    //   setStockResult(response?.results)
    // })
    setStockResult(data)
  }, [])


  return (
    <div className="App">
      <div>
        <input placeholder='search stock by name or price' width={60} />
      </div>
      <table>
        {stockResult.map((stock, index) => (
          index === 0 ? (<tr>
            <th>Name</th>
            <th>Type</th>

          </tr>) : (<tr>
            <td>{stock?.name}</td>
            <td>{stock?.type}</td>
          </tr>)

        ))}
      </table>
    </div>
  );
}

export default App;
