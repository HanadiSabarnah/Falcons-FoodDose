import React from 'react';
// import '../../rest-toDelete/Shiekhaljabal/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Logout from '../logout/logout.js'
// import Title from '../../rest-toDelete/Title/title'



class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        this.getCategories()
    }
    getCategories = () => {
        fetch('/categories/getCategories')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // this.setState({ categories: data })
            })
    }

    render() {
        return (
            <div class='container'>
                {/* <Title /> */}
                <Logout />

                <table class='home' align="center">
                    <tr>
                        {/* <td><img src={fastfood} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={healthy} alt="img" class="img" onClick={() => {
                        window.location.href = '/healthyresturant'
                    }} /></td>

                    <td><img src={barbecue} alt="img" class="img" onClick={() => {
                        window.location.href = '/barbecuerest'
                    }} /></td>

                    <td><img src={salad} alt="img" class="img" onClick={() => {
                        window.location.href = '/saladrest'
                    }} /></td> */}

                        <td><img src={"https://i.pinimg.com/564x/43/49/96/434996df2b32803da3920a3a8345434c.jpg"} alt="img" class="img" onClick={() => {
                            window.location.href = '/drinkrest'
                        }} /></td>
                    </tr>
                    <tr>
                        <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Fast Food</th>
                        <th class="text-center" onClick={() => { window.location.href = '/healthyresturant' }}>Healthy Food</th>
                        <th class="text-center" onClick={() => { window.location.href = '/barbecuerest' }}>Barbecue</th>
                        <th class="text-center" onClick={() => { window.location.href = '/saladrest' }}>Salad</th>
                        <th class="text-center" onClick={() => { window.location.href = '/drinkrest' }}>Drinks</th>
                    </tr>
                    <tr></tr>
                    <tr>
                        {/* <td><img src={bakerie} alt="img" class="img" onClick={() => {
                        window.location.href = '/bakeriesrest'
                    }} /></td>

                    <td><img src={traditional} alt="img" class="img" onClick={() => {
                        window.location.href = '/traditionalrest'
                    }} /></td>

                    <td><img src={pasta} alt="img" class="img" onClick={() => {
                        window.location.href = '/pastarest'
                    }} /></td>

                    <td><img src={dessert} alt="img" class="img" onClick={() => {
                        window.location.href = '/dessertrest'
                    }} /></td> */}

                        <td><img src={"https://i.pinimg.com/564x/ce/a6/37/cea6373348f019f1b4f8a2f047d70f6e.jpg"} alt="img" class="img" onClick={() => {
                            window.location.href = '/seafoodrest'
                        }} /></td>
                    </tr>
                    <tr>
                        <th class="text-center" onClick={() => { window.location.href = '/bakeriesrest' }}>Bakeries</th>
                        <th class="text-center" onClick={() => { window.location.href = '/traditionalrest' }}>Traditional Food</th>
                        <th class="text-center" onClick={() => { window.location.href = '/pastarest' }}>Pasta</th>
                        <th class="text-center" onClick={() => { window.location.href = '/dessertrest' }}>Dessert</th>
                        <th class="text-center" onClick={() => { window.location.href = '/seafoodrest' }}>Sea Food </th>
                    </tr>
                </table>

            </div>
        );
    }
}


export default Home;