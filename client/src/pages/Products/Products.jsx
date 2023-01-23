import React from 'react'
import List from '../../components/List/List'
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.scss"
const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id ="1"  value={1}/>
            <label htmlFor="1">Men</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id ="2"  value={2}/>
            <label htmlFor="2">Women</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id ="3"  value={3}/>
            <label htmlFor="3">Kids</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0$</span>
            <input type="range" name="" id="" min={0} max={100} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}$</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e) => setSort("asc")}/>
            <label htmlFor="asc">Price (High to Low)</label>
            <br />
            <input type="radio" name="price" id="desc" value="desc" onChange={(e) => setSort("desc")} />
            <label htmlFor="desc">Price (Low to High)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/1488470/pexels-photo-1488470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="catImg" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products