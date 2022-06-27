import React from 'react';
import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import { ShopData } from "./UIDatas"
import { FaBars } from "react-icons/fa"


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
        <FaBars />
      </header>

      <div className='Filtering'>
        <div className='search'>
          <input type="text" id='search'  placeholder='Seacrh for anything'/>
          <input type="submit" id='submit' value="Submit"/>
        </div>

        <Category categories={categories} filterItems={filterItems} />
      </div>

      <div className='items'>

        {
          shopItems.map((data, index) => {
            return (
              <div key={index} className="itemCard" >
                <div className='ImgCard'>
                  <img src={data.image_url} alt="pic" />
                </div>
                <p className='name' >{data.name.substring(0,50)}</p>
                <p>Price</p>
                <p className='price'>#{data.price}</p>
                <span className='category'>{data.category}</span>
                <button>Add to cart</button>
              </div>
            )
          })
        }
      </div>



    </div>
  );
}

export default App;
