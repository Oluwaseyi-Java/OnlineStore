import React from 'react'

const ViewSection = ({ data,back }) => {
    return (
        <section className='sectionView'>
            <div className='viewSection'>
                <div className='img'>
                    <img src={data.img} alt='pic' />
                </div>
                <div className='viewCa'>
                    <p className='viewName'>{data.name}</p>
                    <p className='viewPrice'> #{data.price}</p>
                    <p className='viewDescription' >{data.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            <button className='back' onClick={back}>Back</button>
        </section>
    )
}

export default ViewSection