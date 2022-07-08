import React from 'react'
import Hero from './Hero'
import Items from './Items'

const Main = ({ items }) => {
    return (
        <div>
            <Hero img={items} />
            <div className='main'>
                <div className='main-items'>

                    <Items shopItems={items} />

                </div>
            </div>

        </div>
    )
}

export default Main