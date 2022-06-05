import {React, useState} from 'react'
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(' ');
  const [message, setMessage] = useState(' ');

 let weightHandler = (event) => {
  setWeight(event.target.value)
 }
let heightHandler = (event) => {
  setHeight(event.target.value)
}

let calcBim = (event) =>{
  event.preventDefault();
  let bmi = ((weight/height/height)*10000);
  setBmi(bmi.toFixed(2))
  console.log(bmi) 
  if(weight === 0 || height === 0){
    alert("Please enter valid Weight and Height")
  } else if(weight <= 25){
    setMessage("Your suggested weight is between 1 - 25\n You are in a Normal Weight")
  } else if (weight >= 25 && weight <= 30) {
    setMessage("Your suggested weight is between 26 - 30\n You are in a under weight")
  } else if (weight >= 40 && weight <= 50) {
    setMessage("Your suggested weight is between 40 - 50\n You are in a healthy weight")
  } else if (weight >= 51 && weight <= 67) {
    setMessage("Your suggested weight is between 50 - 67\n You are in a healthy weight")
  } else{
    setMessage("Your suggested weight over weight")
  }
}
  return (
    <div className="App">
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className='bmi-wrp'>
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBim}>
          <div className="form-group">
              <label>Height (cm)</label>
              <input className='form-control' type='number' value={height} onChange={heightHandler}/>
            </div>
            <div className="form-group">
                <label>Weight (Kg)</label>
                <input className='form-control' type='number' value={weight} onChange={weightHandler}/>
            </div>
            <div>
              <button className="btn btn-secondary m-1" type='submit'>Submit</button>
            </div>
          </form>
          <div className='bmi-message'>
            <h3 className='py-3'>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
