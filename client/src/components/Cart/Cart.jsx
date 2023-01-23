import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/2325404/pexels-photo-2325404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem perferendis minima nisi? Ex aut suscipit quam inventore obcaecati option.",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem perferendis minima nisi.",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
      <div className='cart'>
          <h1>Products in your cart</h1>
          {data?.map(item => (
              <div className="item" key={item.id}>
                  <img src={item.img} alt="" /> 
                  <div className="details">
                      <h1>{item.title}</h1>
                      <p>{item.desc?.substring(0, 100)}</p>
                      <div className="price">1 x ${item.price}</div>
                  </div>
                  
                  <DeleteOutlinedIcon className='delete'/>
              </div>
             )
            )
          }
          <div className="total">
              <span>SUBTOTAL</span>
              <span>$30</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart