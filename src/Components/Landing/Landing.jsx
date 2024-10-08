import React, { useState } from 'react'

import one from "../../assets/image-product-1-thumbnail.jpg"
import two from "../../assets/image-product-2-thumbnail.jpg"
import three from "../../assets/image-product-3-thumbnail.jpg"
import four from "../../assets/image-product-4-thumbnail.jpg"


const Landing = () => {

    const [render, setRender] = useState(one)

    const [count, setCount] = useState(0)

    const handleCountInc = () => {
        setCount(count + 1)
    }
    const handleCountDec = () => {
        setCount(count - 1)
    }






    return (
        <>
            <div>Landing</div>

            {console.log("hello", count)}   


        </>
    )

}

export default Landing