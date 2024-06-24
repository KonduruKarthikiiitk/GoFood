import React,{useState } from 'react'
import axios from 'axios';
// import Navbar from '../components/Navbar';
import { Link,useNavigate } from 'react-router-dom';
function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate()
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response =  await axios.post(
            "https://go-food-deployment-server.vercel.app/loginuser",
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
   
          const data = response.data;
      console.log(data)
          if (!data.success) {
            alert("Enter valid credentials");
          }
          if(data.success){
            navigate("/")
            localStorage.setItem( "userEmail",credentials.email)
            localStorage.setItem( "authToken",data.authToken)
            console.log(localStorage.getItem("authToken"))
          }
        
    } catch (error) {
        console.error("Error:", error);
    }
  } 
  return (
    <>
    <div>
      
      </div>
      <div className=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-customColor">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            action="#"
            method="POST"
          >

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-customColor"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={credentials.email}
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-customColor"
                >
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={credentials.password}
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-customColor hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Log in
              </button>
              <button type="button" className='mt-2 mr-1 p-1 rounded text-customColor'><Link to="/signup" >I'm a new User</Link></button>
            </div>
            

          </form>
        </div>
      </div>
    </>
  )
}

export default Login
