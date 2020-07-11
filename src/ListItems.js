import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ListItems.css'

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div class="list-inline" key={item.key}>
                <p>
                    <input class="card"  type="text" 
                     id={item.text} 
                     value ={item.text}
                     onChange ={
                         (e) =>{
                             props.setUpdate(e.target.value, item.key)
                         }
                     }
                     />
                <span class="input-group-addon">
                    <FontAwesomeIcon className="faicons" 
                    icon='trash'
                    onClick={ () => props.deleteItem(item.key)
                    }/>
                </span>
                </p>
                
            </div>
        })
    return(
       <div>
           <FlipMove duration={300} easing="ease-in-out">
           {listItems}
           </FlipMove>
           </div>
    )
}
export default ListItems;