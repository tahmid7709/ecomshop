import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
      <div className='categories'>
          <div className="col">
              <div className="row">
              <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
              </div>
              <div className="row">
              <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
              </div>
          </div>
          <div className="col">
              <div className="row">
              <img
            src="https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Arrival
            </Link>
          </button>
              </div>
          </div>
          <div className="col col-l">
              <div className="row">
                  <div className="col">
                      <div className="row">
                      <img
                src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row">
                      <img
                src="https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
                      </div>
                  </div>
              </div>
              <div className="row">
              <img
            src="https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
              </div>
          </div>
    </div>
  )
}

export default Categories