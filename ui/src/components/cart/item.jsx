import React from "react";
import SingleItem from "./singleItem";

function Item(props) {

   const Item=props.details;
   //console.log(Item)
    return ( 
        <tbody class="text-sm divide-y divide-gray-100">
           
          { Item.map(x=>(
                  
                    < SingleItem item={x} />
                  
             ))}
 
      </tbody>
)}

export default Item;