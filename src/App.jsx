import { useState } from 'react'

import './App.css'

import Header from "./Components/Header/Header"
import Left from "./Components/Left/Left"
import Center from "./Components/Center/Center"
import Right from "./Components/Right/Right"
import Footer from "./Components/Footer/Footer"

import Layout from './Components/Layout/Layout'

import { useOutlet, Outlet } from 'react-router-dom'

function App() {


  let outlet = useOutlet()
  let outlet2 = useOutlet()

  return (
    <>

      {/* wireframe */}
      {/* {console.log("out", outlet)} */}
      <div id="routeContainer">

        <Header />

        <div id="routerBody">

          <Left />

          <Center>

            {/* {outlet ? outlet : <p>WTF</p>} */}

          </Center>

          {/* <Layout /> */}

          <Right>
            <div>
              <p>I am a child, here me ROAR</p>
              <p>I am a child, here me ROAR</p>
              <p>I am a child, here me ROAR</p>
            </div>

          </Right >

        </div>


        {/* {outlet2 ? outlet2 : <p>outlet2</p>} */}
        {/* <Outlet /> */}

        <Footer />
        {/* {outlet2 ? outlet2 : <Footer />} */}




      </div>


    </>
  )
}

export default App
