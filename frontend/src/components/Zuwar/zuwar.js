import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './zuwar.css'
import axios from 'axios';
import Header2 from '../Header2/header2';
// import Logout from '../logout/logout';
class Zuwar extends React.Component {
    state = {
        rayan: []
    };


    componentDidMount() {
        const id = "5fb4cc6bed78552714cfb3af"
        axios.get(`http://localhost:5000/fastfoodres/royal/${id}`)
            .then(fastfoodres => {
                this.setState({
                    rayan: fastfoodres.data[31]
                });
                console.log(this.state.rayan)
            })

    }
    render() {
        return (
            <div className='royal'>
                <Header2 />
                {/* <Logout /> */}
                <div className='royalimg'>
                    <img src={this.state.rayan.Image} alt="img" class="royalimg" />
                    <div class="royalinfo">
                        <h1>Contact Details</h1>
                        <h2>Address: {this.state.rayan.Address}</h2>
                        <h3>Phone: {this.state.rayan.Phone}</h3>
                    </div>

                    <div class="royalsocial">
                        <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                        <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "black", fontSize: "xx-large" }} /></a>
                        <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Zuwar;