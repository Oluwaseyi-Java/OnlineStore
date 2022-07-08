import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Items from './Items'
import { ShopData } from "../UIDatas"
import ViewSection from './ViewSection'


const Category = () => {
    const [shopItems, setShopItems] = useState(ShopData.products);
    const [view, setView] = useState(true)
    const [viewData, setViewData] = useState({
        name: "",
        price: 0,
        description: "",
        img: ""
    })

    const { category } = useParams();
    console.log(category)
    const filterItems = (category) => {
        if (category === "all") {
            setShopItems(ShopData.products)
            return
        }

        const newItems = ShopData.products.filter((item) => item.category === category)

        setShopItems(newItems)
    }
    useEffect(() => {
        filterItems(category);
    }, [category]);

    const viewSection = (name, price, description, img_url) => {
        setViewData({
            name: name,
            price: price,
            description: description,
            img: img_url
        })
        setView(false)
    }
    const backFunction = () => {
        setView(true)
    }
    return (
        <div>
            {view ?
                <div className='main'>
                    <div className='main-items'>

                        <Items shopItems={shopItems} viewSection={viewSection} />

                    </div>
                </div>
                :
                <ViewSection data={viewData} back={backFunction} />
            }
        </div>
    )
}

export default Category