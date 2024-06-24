import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
function MyOrder() {
  const [orderData, setOderData] = useState("");
  const fetchMyOrder = async (e) => {
    try {
      const response = await axios.post(
        "https://go-food-deployment-server.vercel.app/myOrderData",
        {
          email: localStorage.getItem("userEmail"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(data);
      setOderData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container sm:mx-auto ml-10  text-black dark:text-white ">
        <div className="">
          {orderData !== {}
            ? Array(orderData).map((data) => {
                return data.orderData 
                  ? data.orderData.order_data.slice(0).map((item) => {
                      return <div>
  {item.map((arrayData, index) => {
    return arrayData.Order_date ? (
      <div key={index} className=" grid mx-auto   mt-20">
        <div className="grid mx-auto">
          <span className="mx-auto font-semibold text-customColor">{arrayData.Order_date}</span>
          <hr className="mt-3  lg:w-[700px] w-[400px] border-customColor   " />
        </div>
      </div>
    ) : null;
  })}
  
  <div className="grid xl:grid-cols-9  lg:grid-cols-6 sm:grid-cols-3 mx-auto   grid-cols-3 gap-11 mt-3 ">
  {item.map((arrayData, index) => {
    return !arrayData.Order_date ? (
      <div key={index} className="mx-auto col-span-3  sm:col-span-3   lg:col-span-3  xl:col-span-3 ">
        <div className=" w-full">
          <div className=" m-3">
            <div
              className="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-darkCard  dark:border-gray-500"
              style={{ width: "390px", height: "155px" }}
            >
              <div className="p-1 my-auto ml-2" style={{ width: "45%" }}>
                <img
                  className="rounded-lg h-28  w-full object-cover"
                  src={arrayData.img}
                  alt=""
                />
              </div>
              <div className="p-5 flex flex-col justify-between" style={{ width: "" }}>
                <div className="flex justify-center">
                  <h5 className="mb-2 text-xl font-bold tracking-tight  text-customColor">
                    {arrayData.name}
                  </h5>
                </div>
                <div className="grid grid-cols-1 text-discription ">
                  <div>Quantity: {arrayData.qty}</div>
                  <div>Size: {arrayData.size}</div>
                  <div>₹{arrayData.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  })}
</div>

</div>

                      
                    })
                  : "";
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
