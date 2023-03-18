import React from 'react';
import SingleProduct from './singleProduct';

export default function ProductList(props) {
  return (

    <React.Fragment>

        <div className='container'>
        <h2 className='head'>Filter by Genre</h2>
         <br/>

        <div className='btns'><br /><br />
            
         <button value='Drama' onclick={props.handleBtns}>Drama</button>
         <button value='Crime' onclick={props.handleBtns}>Crime</button>
         <button value='Action' onclick={props.handleBtns}>Action</button>
         <button value='Fantasy' onclick={props.handleBtns}>Fantasy</button>
         <button value='Western' onclick={props.handleBtns}>Western</button>
         <button value='Science Fiction' onclick={props.handleBtns}>Science Fiction</button>
         <button value='Thriller' onclick={props.handleBtns}>Thriller</button>
         <button value='War' onclick={props.handleBtns}>War</button>
         <button value='Animation' >Animation</button>
         </div> 
         </div>

    <div className='product-center'>
    { 
        props.products.map(product=>{
         return <SingleProduct key={product.genre} product={product}/>

        })}

    </div>
    </React.Fragment>
  )
    }
  

