import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Projects from './components/projects/Projects.jsx'
import About from './components/About/About.jsx'
import Card from './components/card/Card.jsx'
import Resume from './components/Resume/Resume.jsx'
import Hobbies from './components/Hobbies/Hobbies.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'projects' element = {<Projects />} />
      <Route path = 'experience' element = {<Experience />} />
      <Route path = 'resume' element = {<Resume />} />
      <Route path = 'hobbies' element = {<Hobbies />} />
      <Route path = 'contact' element = {<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
