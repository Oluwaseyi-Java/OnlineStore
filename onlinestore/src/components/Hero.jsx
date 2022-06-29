import React from 'react'
import img from "./home-font.png"


const Hero = () => {
    return (
        <section>
            <div className='container'>
                <h1>ONLINE STORE</h1>
                <p> Node can be run on Windows, macOS, many flavors of Linux, Docker, etc. There is a full list on the Node.js Downloads page. Almost any personal ..</p>

                <button>Buy Now</button>
            </div>
            <div className='container2'>
                <img src={img} alt="pic" />
            </div>
        </section>
    )
}

export default Hero