import React, {useState, useEffect} from 'react'
import './menu.css'
import MenuList from './store'
import Item from './item'

function Menu() {
    const [ menuItems, setMenuItems ] = useState(MenuList)

    const items = menuItems.map(item => {
        return (
            <Item
                name={item.name}
                description={item.desciption}
                price={item.price}
                key={item.name}
            />
        )
    })

    return (
        <div>
            <h2 className="menu-header">Healthy Harvest Menu</h2>
            <div className="menu-box" id="menu">
                <ul>
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default Menu