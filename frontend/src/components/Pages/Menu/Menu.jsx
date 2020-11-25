import React from 'react'
import MenuItem from './MenuItem';
import Restaurant from '../Restaurants/Restaurant'

const Menu = (props) => {
    // console.log(props.match.params.id)
    const [menu, setMenu] = React.useState([]);
    const restId = props.match.params.id
    React.useEffect(() => {
        // console.log(getMenu);
        getMenu({ restId })

        return () => console.log('unmounting...')
    }, [restId]);

    const getMenu = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/menu/getItems', requestOptions)
            .then(response => response.json())
            .then(data => { setMenu(data) })
    }

    console.log(props.match.params.id, menu);
    return (
        <div>
            {
                menu[0]?
                <Restaurant restaurant={menu[0].resturant} />:<div></div>
            }
            <div className='menu'>
                {
                    menu.map((item, i) => {
                        return <MenuItem restaurantId={menu[0].resturant._id} item={item} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Menu