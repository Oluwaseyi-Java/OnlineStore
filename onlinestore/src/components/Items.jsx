import React from 'react'

const Items = ({ shopItems, viewSection }) => {
    return (
        <div className='items'>

            {
                shopItems.map((data, index) => {
                    return (
                        <div key={index} className="itemCard" >
                            <div className='ImgCard'>
                                <img src={data.image_url} alt="pic" />
                            </div>
                            <p className='name' >{data.name.substring(0, 20)}...</p>
                            <p>Price</p>
                            <p className='price'>#{data.price}</p>
                            <span className='category'>{data.category}</span>
                            <button
                                onClick={() => viewSection(data.name, data.price, data.description, data.image_url)}
                            >Buy Now</button>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Items