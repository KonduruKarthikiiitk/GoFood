import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import axios from "axios";
function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="cartProd m-1 h-100 w-100 text-center text-orange-500 ">
          The Cart is empty {console.log(" The Cart is empty ")}
        </div>
      </div>
    );
  }
  const handleCheckOut = async(e) =>{
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail");

    try {
      let response = await axios.post(
        "https://go-food-deployment-server.vercel.app/orderData",
        {
          order_data:data,
          email:userEmail,
          order_date:new Date().toDateString()
  
        },
  
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
  
      )

      const data2 = response.data
      console.log("Order Response:",data2)
      if(data2.success){
 
        dispatch({type:"DROP"})
      }

    } catch (error) {
      console.log(error)
    }
   

  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className="  flex items-center justify-center">
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg  ">
        <table className="mx-auto  w-2/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name{console.log(" The Cart is not empty ")}
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Option
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{food.name}</td>
                <td className="px-6 py-4">{food.qty}</td>
                <td className="px-6 py-4">{food.size}</td>
                <td className="px-6 py-4">{food.price}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      color="red"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className=""> Total Price :{totalPrice}</h1>
        </div>
        <div>
          
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
