import './App.css';
import { useEffect, useState } from 'react'
import carsList from './cars.data.json'

function App() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    // For the simplicity the cars list is stored in the JSON file.
    setList(carsList)
    setLoading(false)
  }, [])

  return (
    <div className="carsPage">
      <h1 className="carsPageHeadline">Cars list</h1>
      { loading ? <h4>Data is loading...</h4> :
      <>
        {/* <input placeholder="Start typing in..." type="search" /> */}
        <ul>
          {list.map((item) =>
          <li className="listItem">
            <b>{item.brand}&nbsp;</b>
            <b>{item.model}</b>
            <p className="itemDetails">
              <span>Пробег: {item.mileage} км</span>
              <span>Год: {item.year}</span>
            </p>
          </li>)}
        </ul>
      </>
       }
    </div>
  );
}

export default App;
