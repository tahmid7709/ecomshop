import React from 'react'
import Card from '../Card/Card';
import "./List.scss";

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/2325404/pexels-photo-2325404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1667077/pexels-photo-1667077.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Shirt",
            isNew: false,
            oldPrice: 10,
            price: 7,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/7326896/pexels-photo-7326896.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Denim Pant",
            isNew: false,
            oldPrice: 12,
            price: 10,
        }
    ];
  return (
      <div className='list'>{data?.map(item => (
          <Card item={ item } key={item.id} /> 
      ))}</div>
  )
}

export default List