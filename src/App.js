import './App.css';
import React, { useEffect, useState } from 'react';
import CurrentInput from './components/CurrentComponents/CurrentInput';
import axios from "axios";
import Header from './components/Header';
function App() {
  const [input1, setInput1] = useState('Enter your data')
  const [input2, setInput2] = useState('')
  const [currency1, setCurrency1] = useState("USD")
  const [currency2, setCurrency2] = useState("EUR")
  const [rates, setRates] = useState([])
  useEffect( () => {
    axios.get('https://api.exchangerate.host/latest')
    .then(res => {
      setRates(res.data.rates)
    });
  }, [])
  function toFixed(number){
    return number.toFixed(2) 
  }
  function changeFromInput1(input1){
    setInput2(toFixed(input1 * rates[currency2] / rates[currency1]))
    setInput1(input1)
  }
  function selectFromCurrency1(currency1){
    setInput2(toFixed(input1 * rates[currency2] / rates[currency1]))
    setCurrency1(currency1)
  }
  function changeFromInput2(input2){
    setInput1(toFixed(input2 * rates[currency1] / rates[currency2]))
    setInput2(input2)
  }
  function selectFromCurrency2(currency2){
    setInput1(toFixed(input2 * rates[currency1] / rates[currency2]))
    setCurrency2(currency2)
  }
  return (
    <div className="App">
      <div className='content'>
        <Header 
          rates={rates}
        />
        <div className='group_currency'>
          <CurrentInput
            onSelectValue={selectFromCurrency1} 
            currencies={Object.keys(rates)} 
            onInputValue={changeFromInput1} 
            inputValue={input1} 
            currency={currency1}  />
          <CurrentInput 
            onSelectValue={selectFromCurrency2} 
            currencies={Object.keys(rates)} 
            onInputValue={changeFromInput2}  
            inputValue={input2} 
            currency={currency2}  />
        </div>
      </div>
    </div>
  );
}

export default App;
