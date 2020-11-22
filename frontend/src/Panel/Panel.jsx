import React from 'react'
import { Input, Button } from '@material-ui/core'

import './Panel.css'

class Panel extends React.Component {
    state = {
        catName: '',
        catImg: '',
        resName: '',
        resImg: '',
        resPhone: '',
        resAddress: '',
        catId: '',
        restId: ''

    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(value)
    }

    addCat = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('/categories/createCat', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ catId:data.id }));
    }

    addRest = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('/resturants/createRes', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    handleCatSubmit = (e) => {
        e.preventDefault()
        this.addCat(this.state)
    }

    handlerestSubmit = (e) => {
        e.preventDefault()
        this.addRest(this.state)
    }




    render() {
        const { catName, catImg, resName, resImg, resPhone, resAddress } = this.state
        return (
            <div className='Panel'>
                <form className='Panel__category' onSubmit={this.handleCatSubmit}>
                    <h1>Add a category</h1>
                    <Input
                        type='text'
                        value={catName}
                        name='catName'
                        onChange={this.handleChange} />
                    <Input
                        type='text'
                        value={catImg}
                        name='catImg'
                        onChange={this.handleChange} />
                    <Button type='submit' variant="outlined" color="primary" > Add Cat </Button>
                </form>
                <form className='Panel__resturant' onSubmit={this.handlerestSubmit}>
                    <h1> Add A resturant </h1>
                    <Input
                        type='text'
                        value={resName}
                        name='resName'
                        onChange={this.handleChange} />
                    <Input
                        type='text'
                        value={resImg}
                        name='resImg'
                        onChange={this.handleChange} />
                    <Input
                        type='text'
                        value={resPhone}
                        name='resPhone'
                        onChange={this.handleChange} />
                    <Input
                        type='text'
                        value={resAddress}
                        name='resAddress'
                        onChange={this.handleChange} />
                    <Button type='submit' variant="outlined" color="primary" > Add Res </Button>
                </form>
            </div >
        )
    }
}

export default Panel