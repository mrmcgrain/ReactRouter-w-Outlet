import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Messages from "./Components/Messages/Messages.jsx"
// import Layout from "./Components/Layout/Layout.jsx"
import Blog from "./Components/Blog/Blog.jsx"

import Right from "./Components/Right/Right.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>


      <Routes>



        <Route path="/" element={<App />} >

          <Route path="messages" element={<Messages />} />
          <Route path="blog" element={<Blog />} />

        </Route>

        {/* <Route path="/" element={<App />} > */}
        {/* <Route path="blog" element={<Blog />} /> */}
        {/* </Route> */}

      </Routes>

    </BrowserRouter>


  </StrictMode>,
)
