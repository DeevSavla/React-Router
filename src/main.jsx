import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github,{githubInfo} from './Components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
//to make a router we have to import a method createBrowserRouter which has an array of objects
//it has path which is the main path element is the main.jsx in which is there is nesting.
//then if you want to add children inside it there is an array of child objects.
//This is the old method.
const router = createBrowserRouter(
  //method to create route elements.
  //here element will have {}
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
          <Route path='about' element={<About/>}> 
          </Route>
          <Route path='' element={<Home/>}>
          </Route>
          <Route path='contact' element={<Contact/>}>
          </Route>
          <Route path='github' loader={githubInfo} element={<Github/>}>
          </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  //router provider uses a prop.
)