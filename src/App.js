import React, { useState } from 'react';
import './App.css';
import Card from './component/Card';
import Filter from './component/Filter.js';


function App() {

  const [state, setstate] = useState([
    {
      name: "ahmed",
      age: 15,
      address: "cairo"
    },
    {
      name: "laila",
      age: 22,
      address: "zagazig"
    },
    {
      name: "mahmoud",
      age: 23,
      address: "mansora"
    },
    {
      name: "mona",
      age: 34,
      address: "tanta"
    }
  ]
  )

  const [filter,setFilter] = useState("")

  const deleteFunc = (e, clickIdx) => {
    // const deleteObertion = state.filter((e,idx) => idx !== clickIdx) 
    // setstate(deleteObertion)
    setstate((prevState) => {
      return prevState.filter((e, idx) => idx !== clickIdx)
    })
  }

  const [cardToggle, setCardToggle] = useState(true)

  const filterNames = (name) => {
    setFilter(name);
  }

  const nameHandler = () => {
    if(filter.length > 0 ){
      return state.filter((el)=>el.name.includes(filter))
    }
    return state
  }




  return (
    <>
      <div className='conter'>

        <button onClick={() => setCardToggle(!cardToggle)} > {cardToggle ? "hide names" : "show names"}  </button>
          
        <div className={cardToggle ? "show" : "hide"} >
          <Filter filteration={filterNames} />
          <Card namelist={nameHandler()} deleteFunc={deleteFunc} />
        </div>

      </div>
    </>

  );
}


export default App;
