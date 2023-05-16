import React from 'react';
import './App.css';
import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
  } from "react-router-dom";
  import Footer from "./components/Footer";
  import Home from './pages/Home';
  import About from './pages/About';
  import New from './pages/New';
  import Contact from './pages/Contact';
	import Login  from './pages/Login';
	import Navbar from './components/Navbar';

  const Layout =() =>{
	return (
		<>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</>
	);
  };
  const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Layout/>,
	  children:[
		{
			path:"Home/",
			element:<Home/>
		},
		{
			path:"/about",
			element:<About/>
		},
		{
			path:"/new/:id",
			element:<New/>
		},
		{
			path:"/contact",
			element:<Contact/>
		},
	  ],
		
	},

  ]);

function App() {
  return (
   <div className=''>
		<div>
			<RouterProvider router={router} />
		</div>
   </div>
  )
}

export default App;
