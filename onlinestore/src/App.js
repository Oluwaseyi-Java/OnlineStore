import React from 'react';
import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import { ShopData } from "./UIDatas"
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa"
import Hero from './components/Hero';
import Items from './components/Items';
import Footer from "./components/Footer"

const allCategories = ["all", ...new Set(ShopData.products.map((product) => product.category))]
console.log(allCategories)


function App() {

  const [categories, setCategories] = useState(allCategories);
  const [shopItems, setShopItems] = useState(ShopData.products);

  const filterItems = (category) => {
    if (category === "all") {
      setShopItems(ShopData.products)
      return
    }

    const newItems = ShopData.products.filter((item) => item.category === category)

    setShopItems(newItems)
  }


  return (

    <div className="App">

      <header className="App-header">
        <p>OnlineStore</p>
        <div className='Icons'>
          <FaCartArrowDown />
          <FaUserCircle />
        </div>
      </header>



      <Hero />
      <Category categories={categories} filterItems={filterItems} />
      <div className='main'>
        <div className='sideTools'></div>
        <div className='main-items'>
          <div className='Filtering'>
            <div className='search'>
              <input type="text" id='search' placeholder='Seacrh for anything' />
              <input type="submit" id='submit' value="Submit" />
            </div>
            <p>Buy Items with a discount rate of 10%</p>
          </div>

          <Items shopItems={shopItems} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
