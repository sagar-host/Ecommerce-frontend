import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/all';
import "./Home.css";
import Product from "./Product.js"


const product ={
    name:"tshirt",
    price:"$35",
    _id: "sagar",
    images:[{url:"https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg"}]
}
const Home = () => {
  return (
    <Fragment>
        <div className="banner">
            <p>Wellcome to Ecommerce</p>
            <h1>Find Amazing Products Below</h1>

            <a href="#container">
                <button>scroll
                <CgMouse/></button>
            </a>
        </div>
        <h2 className='homeHeading'>Featured Products</h2>

        <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />

        </div>
    </Fragment>
  )
}

export default Home