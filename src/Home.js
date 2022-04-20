import React from 'react'
import bootstrap from 'bootstrap';
import './Home.css'
import Addproduct from './components/Addproduct';
import { useState } from 'react';
import { Row } from 'react-bootstrap'



function Home() {
  const [data, setData] = useState('');
  const parentToChild = () => {



    const number = Number(prompt("how much row do you want"))
    

      function getlist() {
        return (
        <div id="pform" className='p-3'>
          <Row>
            <div class="content-bar">
              <label for="code" color='black'>Product Code</label>
              <div class="itemnum"><input type="text" id="code"></input></div>
              <label for="text" color='black'>Product Name</label>
              <div class="itemnum"><input type="text" id="name"></input></div>
              <label for="qty" color='black'>Quantity</label>
              <div class="itemnum"><input type="number" id="qty"></input></div>


            </div>
          </Row>
        </div>)

      }
      
    
    

       setData(getlist())
    
  }
















return (

  <div>
    <div>
      <header />
    </div>



    <div class="page P-5">

      <div class="page__demo">
        <div class="demo-buttons">
          <button onClick={() => parentToChild()} class="button button_hb button_hb-type1 demo-buttons__button">
            <span class="button__label">ADD PRODUCT</span>
          </button>
          <button class="button button_hb button_hb-type2 demo-buttons__button">
            <span class="button__label">REMOVE PRODUCT</span>
          </button>
          <button class="button button_hb button_hb-type3 demo-buttons__button">
            <span class="button__label">LIST PRODUCT</span>
          </button>

        </div>

      </div>
    </div>
    <div className="App">

      <Addproduct parentToChild={data} />

    </div>


  </div>
  

)
}




export default Home