import { React, useEffect, useState } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue')
  const [car, setCar] = useState('maruti')

  var newbuld = "build"

  var increaseCount = () => {

    setCount(prevCount => prevCount + 1)
    setColor('red')

    console.log(count)

  }

  var selectCar = (e) => {
    setCar(e)

  }

  useEffect(() => {
    console.log(`Mounted`)
    // setColor('grey')
  })

  return (
    <div className="App">
      <span>{count}</span>
      <span>{color}</span>
      <span>{car}</span>
      <span>{newbuld}</span>
      <button onClick={() => { increaseCount() }}>Increase count</button>
      <button onClick={() => { selectCar('benz') }}>Select car</button>
    </div>
  );
}

export default App;
