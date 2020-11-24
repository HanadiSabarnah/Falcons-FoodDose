import React from 'react'
import MenuDialog from './MenuDialog'

class OwnerMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [],
            type: '',
            price: ''
        }
    }

    componentDidMount = () => {
        this.getMenu({ restId: this.props.restId })
    }

    setType = (event) => this.setState({ type: event.target.value })
    setPrice = (event) => this.setState({ price: event.target.value })

    getMenu = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('menu/getItems', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    postReq = (obj) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('menu/additem', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.componentDidMount()
                this.setState({
                    type: '',
                    price: ''
                })
            })
    }

    addITem = () => {
        this.postReq({ restId: this.props.restId, type: this.state.type, price: this.state.price })
    }


    render() {
        const { restId,type,price } = this.props
        return (
            <div>

                <h3> Add your menu </h3>
                <MenuDialog setType={this.setType} setPrice={this.setPrice} addITem={this.addITem} type={type} price={price}/>

            </div>
        )
    }
}


export default OwnerMenu