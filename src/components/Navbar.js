import React, { useState } from "react";
import Switcher from "./Switcher";
// import Badge from '@material-tailwind/react';
// import { Badge } from '@mui/base/Badge';
import { styled, Box } from "@mui/system";
import { Badge as BaseBadge, badgeClasses } from "@mui/base/Badge";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

function BadgeContent() {
  return (
    <Box
      component="span"
      sx={{
        width: 15,
        // height: 20,
        borderRadius: "12px",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    />
  );
}

const Badge = styled(BaseBadge)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: 'IBM Plex Sans', sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    font-weight: 800;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: #fff;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `
);

function Navbar() {
  let data = useCart();
  const [isopen, setIsOpen] = useState(false);
  const [cartView,setCartView] = useState(false)
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isopen);
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");

    window.location.reload();
  };

  return (
    <div>
      <nav className=" rounded-md    fixed w-full top-0 z-50" style={{backgroundColor:"#EF5E0C"}}> 
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <div className=" flex h-16 items-center ">
            <div className="  sm:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className=" relative inline-flex items-center  justify-center rounded-md p-1  dark:hover:bg-orange-500 hover:text-white  focus:ring-2 focus:ring-orange-300   "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5 text-white"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6  w-9 font-extrabold "
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    className="text-white "
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center  justify-center md:items-stretch  text-white ">
              <div className="flex flex-shrink-0 ">
                <h3 className="text-3xl font-bold   italic">GoFood</h3>
              </div>
              <div className="sm:ml-auto">
              <div className="hidden   sm:ml-6 sm:block font-semibold  ">
                <div className="flex    space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className="  hover:bg-orange-400 rounded-md  px-3 py-2 focus:bg-orange-400  "
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  {localStorage.getItem("authToken") ? (
                    <Link
                      to="/myOrder"
                      exact
                      className="   hover:bg-orange-400  text-white block rounded-md px-3 py-2 text-base focus:bg-orange-400   "
                      aria-current="page"
                    >
                      MyOrders
                    </Link>
                  ) : (
                    ""
                  )}
               
             
                {!localStorage.getItem("authToken") ? (
                  <div className="flex space-x-4  ">
                    <NavLink
                      to="/login"
                      className=" hover:bg-orange-400 text-white focus:bg-orange-400 rounded-md px-3 py-2  "
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="hover:bg-orange-400 focus:bg-orange-400 hover:text-white rounded-md px-3 py-3 text-sm "
                    >
                      Signup
                    </NavLink>
                  </div>
                ) : (
                  <div className="  space-x-4 ">
                    <button
                      to="/"
                      className=" hover:bg-orange-400 focus:bg-orange-400  hover:text-white rounded-md px-3 py-3 text-sm "
                    onClick={() =>setCartView(true)}
                    >
                        
                      MyCart 
                    
                      <Badge className="text-orange-500   "  badgeContent={data.length}>
                        <BadgeContent />
                      </Badge>
                      
                    </button>
                    {cartView?  <Modal onClose={() => {setCartView(false)}} ><Cart /></Modal>:null}
                    <button
                      to="/"
                      className="hover:bg-orange-400 focus:bg-orange-400  hover:text-white rounded-md px-3 py-3 text-sm "
                      onClick={handleLogout}
                    >
                      LogOut
                    </button>
                  </div>
                )}
                </div>
              </div>
              </div>
            </div> 
            <div className="mb-2 lg:-mr-10 ml-6   space-x-4 " >
              <Switcher className="p-2 ml-auto" />
            </div>
          </div>
        </div>

        {isopen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                exact
                className="  hover:bg-orange-500  text-white focus:ring focus:ring-orange-200 block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Home
              </Link>
              {localStorage.getItem("authToken") ? (
                <Link
                  to="/myOrder"
                  exact
                  className="   hover:bg-orange-500 text-white  block rounded-md    px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  MyOrders
                </Link>
              ) : (
                ""
              )}

              {!localStorage.getItem("authToken") ? (
                <>
                  <Link
                    to="/signup"
                    className=" text-gray-300  hover:bg-orange-500 text-left w-full  hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Signup
                  </Link>
                  <Link
                    to="/login"
                    className=" text-white  hover:bg-orange-500 w-full text-left hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Login
                  </Link>
                  </>
              ) : (
                <span className="">
                  <button onClick={() =>setCartView(true)} className=" text-white w-full text-left   hover:bg-orange-500    rounded-md px-3  py-2 text-base font-medium">
                    MyCart
                    <Badge className="text-orange-500  "  badgeContent={data.length}>
                        <BadgeContent />
                      </Badge>
                  </button>
                  {cartView?  <Modal onClose={() => {setCartView(false)}} ><Cart /></Modal>:null}
                  <button
                    className="    hover:bg-orange-500 text-white  w-full text-left   block rounded-md px-3 py-2 text-base font-medium"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
