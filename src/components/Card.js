import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  const priceRef = useRef();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if(item.id === props.foodItem._id){
        food = item;
      break;
      }
    }
    if(food !== []){
      if(food.size === size){
        await dispatch({type:"UPDATE",id:props.foodItem._id,price : finalPrice,qty:qty})
        return;
      }

      else if(food.size !== size){
        await dispatch({
          type: "ADD",
          key: props.foodItem._id,
          id: props.foodItem._id,
          name: props.foodItem.name,
          img:props.foodItem.img,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return
      }
      return
    }
   
  
      await dispatch({
        type: "ADD",
        key: props.foodItem._id,
        id: props.foodItem._id,
        name: props.foodItem.name,
        img:props.foodItem.img,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    
    console.log(data);
  } 
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div className=" ">
      <div
        className=" max-w-sm bg-white  border border-gray-200 rounded-lg shadow dark:bg-darkCard dark:border-gray-200"
        style={{ width: "17rem", maxHeight: "445px" }}
      >
        <img
          className="rounded-t-lg justify-center h-44 w-full object-cover"
          src={props.foodItem.img}
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-customColor ">
            {props.foodItem.name}
          </h5>

          <p className="mb-0 text-md font-normal text-discription ">
            {props.foodItem.description} 
          </p>
          <div className="text-customColor grid grid-cols-3 conatainer w-50 m-2 ">
            <select
              className="m-2 h-100 w-100 bg-foodDetails dark:bg-DarkFoodDetails rounded p-0.5"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option
                    className="hover:bg-orange-300"
                    key={i + 1}
                    value={i + 1}
                  >
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 bg-foodDetails dark:bg-DarkFoodDetails  rounded p-0.5"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="inline m-2 bg-foodDetails dark:bg-DarkFoodDetails  font-medium me-2 px-1.5 py-0.5 rounded ">₹{finalPrice}/-</div>
            
          </div>
          <hr/>
          <div className=" flex justify-center items-center ">
              <button
                className="m-3 p-1 bg-foodDetails text-customColor dark:bg-DarkFoodDetails  rounded  "
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
