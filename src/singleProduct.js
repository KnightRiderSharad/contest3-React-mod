import React from 'react';
import { data } from './data';

export default function SingleProduct(props) {
  return (
    
    //     <React.Fragment>
         
    //     <div className='single'>
            
    //     <h3>Title: {props.product.title}</h3>
    //     <p>Genre: {props.product.genre}</p>
    //     <p>Year: {props.product.year}</p>
        
        
    // </div>
    // </React.Fragment>


    <div>
        <table className='table'>
          
            <th className='main'>Title</th>
           <th className='main'>Genre</th>
            <th className='main'>Year</th>
            
            {
             data.map(item=>{
                return(
                 <tr>
                    <td>{item.title}</td>
                    <td>{item.genre}</td>
                    <td>{item.year}</td>
                 </tr>

                )
            })
        }
        </table>
    </div>
  )
}
