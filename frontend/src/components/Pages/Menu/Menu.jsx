import React from 'react'

const Menu = (props) => {
    // console.log(props)
    const [menu, setMenu] = React.useState([]);
    const restId = props.match.params.id
    React.useEffect(() => {
        // console.log(getMenu);
        getMenu({restId})
        console.log(menu);
        return () => console.log('unmounting...')
    },[restId]);

    const getMenu = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/menu/getItems', requestOptions)
            .then(response => response.json())
            .then(data => {setMenu(data)})
    }
    
    return (
        <div className='menu'>
            
        </div>
    )
}

export default Menu