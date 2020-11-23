import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/SharedComponents/Footer/footer.js';
import Login from '../src/components/Pages/LogIn/LogIn.js'
import SignUp from '../src/components/Pages/Signup/signUp.js';
import Home from './components/Pages/Home/home';

//My imports
import Panel from './components/Pages/Panel/Panel'


class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="App" >
                <div>
                    <Router>
                    <Route path="/panel" exact component={() => <Panel />} />
                        {/* <Route path="/" exact component={() => <Welcome />} /> */}
                        <Route path="/home" exact component={() => <Home />} />
                        <Route path="/login" exact component={() => <Login />} />
                        <Route path="/signup" exact component={() => <SignUp />} />
                        {/* <Route path="/logout" exact component={() => <Logout />} /> */}
                        {/* <Route path="/" exact component={() => <categories />} /> */}
                        {/* <Route path="/category/:id" exact component={() => <Resturants />} /> */} console.log(math.params.id)
                    </Router>
                </div>
                {/* <div className="footer">
                    <Footer />
                </div> */}
            </div>
        );
    }
}
export default App;