import React from 'react'
import MenuItem from './MenuItem';
import Restaurant from '../Restaurants/Restaurant'
import { Button } from '@material-ui/core'
import './Menu.css'

const Menu = (props) => {
    // console.log(props)
    const [menu, setMenu] = React.useState([]);
    const [food, setFood] = React.useState([]);

    const restId = props.match.params.id
    const userId = localStorage.getItem('userId') || localStorage.getItem('ownerId') || localStorage.getItem('adminId')
    React.useEffect(() => {
        // console.log(getMenu);
        getMenu({ restId })

        console.log(menu);
        // return () => console.log('unmounting...')
    }, [restId, food]);

    const addCartItem = (item) => {
        // console.log("rest:", restaurantId, "item :", item._id, "user :", userId)
        let arr = [].concat(food)
        const exist = arr.find(cartItem => cartItem._id === item._id)
        if (exist) {
            if (!exist.count) {
                exist.count = 2
            } else {
                exist.count += 1
            }
            setFood(arr)
        } else {
            arr.push(item)
            setFood(arr)
        }
    }

    const getMenu = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/menu/getItems', requestOptions)
            .then(response => response.json())
            .then(data => { setMenu(data.items) })
    }


    // console.log(props.match.params.id, menu);
    // console.log('>>', food)
    return (
        <div className="restaurantMenu">
            <div className='restaurantDetail__menu'>
                {
                    menu[0] ?
                        <Restaurant restaurant={menu[0].resturant} /> : <div></div>
                }
                <div className='menu'>
                    {
                        menu[0] ?
                            menu.map((item, i) => {
                                return <MenuItem addCartItem={addCartItem} restaurantId={menu[0].resturant._id} item={item} key={i} />
                            }) : <div></div>
                    }
                </div>
            </div>
            <div className='cart__menu'>
                <h2>Cart</h2>
                {
                    food.map((item, i) => {
                        return <div key={i}>
                            <h4>{item.type}</h4>
                            <h5>${item.price}</h5>
                            {
                                item.count>0?
                            <h5>#{item.count}</h5>:<div></div>
                            }
                        </div>
                    })
                }
                {
                    food.length > 0 ? <Button variant="contained" >Buy</Button> : <div>Empty cart</div>
                }
            </div>
        </div>
    )
}

export default Menu