import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cart from "./components/Cart.jsx"
import { Route, Routes } from "react-router-dom"
import { ShopData } from "./UIDatas"
import Footer from "./components/footer/Footer"
import Main from './components/Main';
import Category from "./components/Category"
import { /*FaBars*/ FaCartArrowDown, /*FaUserCircle*/ } from "react-icons/fa"


const allCategories = ["all", ...new Set(ShopData.products.map((product) => product.category))]
console.log(allCategories)

function App() {

  const [categories, setCategories] = useState(allCategories);
  const [shopItems, setShopItems] = useState(ShopData.products);

  useEffect(() => {
    setCategories(allCategories);
    setShopItems(ShopData.products)
},[])

  return (
    <div className="App">

      <header className='App-header'>
        <p>OnlineStore</p>
        <div className='Category'>
          <ul>
            {categories.map((category, index) => {
              return <li key={index} ><a href={`/${category}`}>{category}</a></li>

            })}
          </ul>
        </div>

        <div className='Icons'>
          <FaCartArrowDown onClick={() => {
            window.location.assign("/cart")
          }} />
        </div>
      </header>


      <Routes>
        <Route exact path='/' element={<Main items={shopItems} />} />
        <Route path={`/:category`} element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
