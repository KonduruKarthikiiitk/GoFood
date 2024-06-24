import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Glide from "@glidejs/glide";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const [Search,setSearch] = useState('')

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://go-food-deployment-server.vercel.app/foodData",
        {
          headers: {
            "Content-Type": "application/json",
          }
          ,
          withCredentials: false,
        }
      )

      const data = response.data
      setFoodItem(data[0])
      setFoodCat(data[1])
      

    }
    catch (error) {
      console.error("Axios Error:", error);
    }
  }
  useEffect(() => {
    
    loadData()
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, [])

  return (
    <div className='text-black dark:text-white'>
      <div><Navbar /> </div>
      <div>
      <div className=" relative">
        <div className=" relative">
          <div
            className="absolute inset-0 grid h-full w-full place-items-center  "
            >
            <div className="sm:w-5/12 lg:max-xl:w-1/4 absolute top-10  md:ml-7   " style={{ zIndex: "10" }}>
              <div className="max-w-md mx-auto ">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-customColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap ="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-customColor border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-DarkCard dark:border-gray-600 placeholder:text-black dark:placeholder-customColor dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    value={Search}
                    onChange={(e) =>{setSearch(e.target.value)}}
                    required
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glide-01 relative mt-16     w-full brightness-50" style={{marginTop :"65px"}}>
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li  >
                <img
                  src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
                  className="m-auto max-h-full w-full max-w-full  "
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://t3.ftcdn.net/jpg/06/63/54/90/360_F_663549075_ynS6nfgGsV7YIWG2rSH577RnlBQ8cqBv.jpg"
                  className="m-auto max-h-full w-full max-w-full"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4="
                  className="m-auto max-h-full w-full max-w-full"
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-black/50 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 bg-black text-white"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-black/50 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5  w-5  text-white"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      </div>
      <div className=' container mx-auto '>
        {
          foodCat && foodCat.length !== 0
            ? ( 
              foodCat.map((data, index) => {
                return(
                  <div key={index}  className=' grid mt-2 mx-auto  '>
                <div
                  className='text-xl m-3 mx-auto text-customColor font-semibold '
                  
                >
                  {data.CategoryName}
                </div>
                <hr className='dark:border-customColor border-customColor mr-20 ml-20   '/>
                <div className=' grid xl:grid-cols-12 mx-auto lg:grid-cols-9 sm:grid-cols-6 grid-cols-1 gap-x-20 gap-y-4  mt-3   '>
                {
                  foodItem && foodItem.length !== 0? foodItem.filter((item) => (item.CategoryName=== data.CategoryName  ) && (typeof Search === 'string' && item.name.toLowerCase().includes(Search.toLowerCase())))
                  .map(filterItems =>{
                  
                    return(
                      <div
                      key={filterItems._id}
                      className='col-span-1 sm:col-span-3  lg:col-span-3  '                      
                      >
                      <Card
                         key={filterItems._id}
                         foodItem = {filterItems}
                         options={filterItems.options[0]}
                         className=""
                      />

                      </div>
                      )
                  })
                  :<div>No such Data Found</div>
                }
                </div>
                </div>
                

              )})
            ) : (
              <div></div>
            )}

      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
