import React, {Component} from 'react'
import {data} from './data'
import ProductList from './ProductList'
import './App.css'

export default class App extends Component{

  state={
    products:data,
    productCopy:[]
  }

  //filtering button functionality-
  handleBtns=(e)=>{
    console.log(e.target.value);
    let productCopy;

    if(e.target.value==='Drama'){
      console.log("filtering by Drama");
      productCopy=this.state.products;
    }

    if(e.target.value==='Crime'){
      console.log("filtering by Crime");
      productCopy=this.state.products;
    }

    if(e.target.value==='Action'){
      console.log("filtering by Action");
      productCopy=this.state.products;
    }

    if(e.target.value==='Fantasy'){
      console.log("filtering by Fantasy");
      productCopy=this.state.products;
    }

    if(e.target.value==='Western'){
      console.log("filtering by Western");
      productCopy=this.state.products;
    }

    if(e.target.value==='Science Fiction'){
      console.log("filtering by Science Fiction");
      productCopy=this.state.products;
    }
    
    if(e.target.value==='Thriller'){
      console.log("filtering by Thriller");
      productCopy=this.state.products;
    }

    if(e.target.value==='Fantasy'){
      console.log("filtering by Fantasy");
      productCopy=this.state.products;
    }

    if(e.target.value==='War'){
      console.log("filtering by War");
      productCopy=this.state.products;
    }

    if(e.target.value==='Animation'){
      console.log("filtering by Animation");
      productCopy=this.state.products;
    }

    else{
      productCopy=this.state.products.filter(item=>item.genre===e.target.value)
    }

    this.setState({
      productCopy:productCopy
    })
  }

  render(){
    return(
      
    <div>
        <h1 className='heading'>Top 15 Movies of All Time</h1>
        
        <ProductList products={this.state.products} handleBtns={this.handleBtns}/>
    
    </div>
    )
  }
}
