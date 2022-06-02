import React, { useState } from "react";
import Lists from "./component/Lists";
import "./style.css"
const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    function itemEvent(event) {
        setInputList(event.target.value);
    }
    function listOfItems() {
        setItems((oldItem) => {
            return [...oldItem, inputList];
        })
        setInputList("")
    }
    function deleteItem(id){
        console.log("delted")
        setItems((oldItem) => {
            return oldItem.filter((arrayElement,index)=>{
                return index!== id ;
            })
        })
    }
    return (
        < >
            <div className="main_div">
                <div className="center_div">
                    <h1>Todo List </h1>
                    <input type="text" onChange={itemEvent} value={inputList} placeholder="Enter List Item" />
                    <button onClick={listOfItems}><i className="add fa-solid fa-plus"></i></button>

                    <ol>

                        {
                            items.map((itemVal, index) => {
                                return <Lists 
                                text={itemVal} 
                                id={index} 
                                onSelect={deleteItem}
                                />
                            })
                        }

                    </ol>

                </div>
            </div>

        </>
    )
}
export default App;