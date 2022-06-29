import React from 'react'

const Items = ({shopItems}) => {
    return (
        <div className='items'>

            {
                shopItems.map((data, index) => {
                    return (
                        <div key={index} className="itemCard" >
                            <div className='ImgCard'>
                                <img src={data.image_url} alt="pic" />
                            </div>
                            <p className='name' >{data.name.substring(0, 50)}</p>
                            <p>Price</p>
                            <p className='price'>#{data.price}</p>
                            <span className='category'>{data.category}</span>
                            <button>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>

  )
}

export default Items