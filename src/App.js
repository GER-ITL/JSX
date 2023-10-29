// import { useMemo } from "react";
import { useState } from "react";
import { cars as carsData } from "./cars-data.js";
import CreateCarForm from "./components/create-car-form/CreateCarForm.jsx";
import CarsItem from "./components/ui/CarsItem.jsx";
import "./styles/App.scss";

function App() {
 // const [filter, setFilter] = useState('')
//const filteredCars = useMemo(() => cars.filter(car => car.price > 150000), [filter]) 
  const[cars, setCars] = useState(carsData)

  return (
    <>
      <div>
        <h1>Cars Catalog</h1>
        <CreateCarForm setCars = {setCars}/>
        <div>
          {cars.length ? cars.map((car) => (
              <CarsItem key={car.id} car={car}/>
          ))
        : <p>There are no car</p>
        }
        </div>
      </div>
    </>
  );
}

export default App;
