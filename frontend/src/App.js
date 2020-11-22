import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from '../src/components/Footer/footer.js';
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';
import Fastresturant from '../src/components/Fastresturant/fastresturant.js'
import Royal from '../src/components/Royal/royal.js'
import Welcome from '../src/components/Welcome/welcome.js'
import Logout from '../src/components/logout/logout.js'
import KFC from '../src/components/KFC/kfc.js'
import Rayan from '../src/components/AL-Rayan/rayan.js'
import Dolar from '../src/components/Dolar/dolar.js'
import Daiah from '../src/components/Daiah/daiah.js'
import Ch from '../src/components/ChilieHouse/ch.js'
import Yummy from "../src/components/Yummy/yummy.js"
import Sego from "../src/components/SegoFredo/sego.js"
import Dose from "../src/components/DoseBurger/dose.js"
import Healthyresturant from '../src/components/Healthyresturant/healthyresturant.js'
import Barbecuerest from '../src/components/Barbecuerest/barbecuerest.js';
import Saladrest from '../src/components/Saladrest/saladrest.js';
import Drinkrest from '../src/components/Drinkrest/drinkrest.js';
import Bakeriesrest from '../src/components/Bakeriesrest/bakeriesrest.js';
import Traditionalrest from '../src/components/Traditionalrest/traditionalrest.js';
import Pastarest from '../src/components/Pastarest/pastarest.js';
import Dessertrest from '../src/components/Dessertrest/dessertrest.js';
import Seafoodrest from '../src/components/Seafoodrest/seafoodrest.js';
import Zuwar from '../src/components/Zuwar/zuwar.js';
import Kcal from '../src/components/Kcal/kcal.js';
import Baitalyasameen from '../src/components/Baitalyasameen/baitalyasameen.js';
import Sofraji from '../src/components/Sofraji/sofraji.js';
import Golden from '../src/components/Golden/golden.js';
import Alsham from '../src/components/AlSham/alsham.js';
import Shiehk from "../src/components/Shiekhaljabal/shiekh.js"
import Ibrahim from "../src/components/Ibrahim/ibrahim.js"
import Ward from "../src/components/Ward/ward.js"
import Talet from "../src/components/Talet/talet.js"
import ALQuds from "../src/components/ALQuds/ALQuds.js"
import OrientHouse from "../src/components/OrientHouse/OrientHouse.js"
import Roza from "../src/components/Roza/roza.js"
import Hebronsky from "../src/components/HebronSky/hebronsky.js"
import Queenplaza from "../src/components/QueenPlaza/queenplaza.js"
import Hawana from "../src/components/Hawana/Hawana.js"
import Villa from "../src/components/Villa/villa.js"
import Coffee from "../src/components/CoffeeCorner/coffe.js"
import Qcandy from "../src/components/Qcandy/qcandy.js" 
import Nutella from "../src/components/Nutella/nutella.js"
import Karamello from "../src/components/Karamello/karamello.js"
import Yasmeen from "../src/components/Yasmeen/yasmeen.js"
import Sara from "../src/components/Sara/sara.js"
import Cocktail from "../src/components/Cocktail/cocktail.js"
import Fayrouz from "../src/components/Fayrouz/fayroz.js"

//My imports
import Panel from './Panel/Panel'


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
                        <Route path="/" exact component={() => <Welcome />} />
                        <Route path="/home" exact component={() => <Home />} />
                        <Route path="/login" exact component={() => <Login />} />
                        <Route path="/signup" exact component={() => <SignUp />} />
                        <Route path="/logout" exact component={() => <Logout />} />
                        <Route path="/fastfoodres" exact component={() => <Fastresturant />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bed78552714cfb3af' exact component={() => <Royal />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bed785524445dfksu' exact component={() => <KFC />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bed78555451dsihao' exact component={() => <Rayan />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek56464545dskdk' exact component={() => <Dolar />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek56887454hihdi' exact component={() => <Daiah />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek54764575ojisk' exact component={() => <Ch />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek58649565djfhs' exact component={() => <Yummy />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bej57569952fxrtv' exact component={() => <Sego />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek5741578sdfffg' exact component={() => <Dose />} />
                        <Route path='/healthyresturant' exact component={() => <Healthyresturant />} />
                        <Route path='/fastfoodres/royal/5fb4cc6hjfgjhg45261659' exact component={() => <Zuwar />} />
                        <Route path='/fastfoodres/royal/5fb4jkhjfghkjn25645648' exact component={() => <Kcal />} />
                        <Route path='/fastfoodres/royal/5ffdhjvhk1151265659879' exact component={() => <Baitalyasameen />} />
                        <Route path='/fastfoodres/royal/5frmweflm,145236878778' exact component={() => <Sofraji />} />
                        <Route path='/barbecuerest' exact component={() => <Barbecuerest />} />
                        <Route path='/fastfoodres/royal/jhfgjhgjk4546459654999' exact component={() => <Golden />} />
                        <Route path='/fastfoodres/helth/5456re654fre646q546564' exact component={() => <Alsham />} />
                        <Route path='/fastfoodres/helth/5426986232slklkdww9899' exact component={() => <Shiehk />} />
                        <Route path='/fastfoodres/helth/54elfwnkwk654f56ew456a' exact component={() => <Ibrahim />} />
                        <Route path='/fastfoodres/helth/ewef54ewfasda5sd54asd4' exact component={() => <Ward />} />
                        <Route path='/fastfoodres/helth/wsadmdfmm654w564fw4fe8' exact component={() => <Talet />} />
                        <Route path='/fastfoodres/helth/erokglre5454fefwe54548' exact component={() => <ALQuds />} />
                        <Route path='/fastfoodres/helth/lkdfmkl544xc54d87a3c56' exact component={() => <OrientHouse />} />
                        <Route path='/saladrest' exact component={() => <Saladrest />} />
                        <Route path='/fastfoodres/salad/jooj5649fd4sdjjngdf555' exact component={() => <Roza />} />
                        <Route path='/fastfoodres/salad/fklmefkmrm65f45sf456sd' exact component={() => <Hebronsky />} />
                        <Route path='/fastfoodres/salad/lkflkne5ds4fs5df4a556d' exact component={() => <Queenplaza />} />
                        <Route path='/fastfoodres/salad/jdfhjksdjk56515645sdf6' exact component={() => <Hawana />} />
                        < Route path='/fastfoodres/salad/fpjefwpkf54e657e564r8' exact component={() => <Villa />} />
                        <Route path='/drinkrest' exact component={() => <Drinkrest />} />
                        < Route path='/fastfoodres/drinks/ljlg65r4g94r99894rs99' exact component={() => <Coffee />} />
                        < Route path='/fastfoodres/drinks/lsdlksdjfkjkjao545477' exact component={() => <Qcandy />} />
                        < Route path='/fastfoodres/drinks/kdmksd5445sggkejl7g54' exact component={() => <Nutella />} />
                        < Route path='/fastfoodres/drinks/klfklmweklfmkalaslfm5' exact component={() => <Karamello />} />
                        < Route path='/fastfoodres/drinks/kkmglw;e65reg6e5rg56r' exact component={() => <Yasmeen />} />
                        < Route path='/fastfoodres/drinks/nflknr56e8r6f6f2xc668' exact component={() => <Sara />} />
                        < Route path='/fastfoodres/drinks/jnfdjkndf65h4rt45te88' exact component={() => <Cocktail />} />
                        < Route path='/fastfoodres/drinks/jfwejhlkfdn5646asdf54' exact component={() => <Fayrouz />} />
                        <Route path='/bakeriesrest' exact component={() => <Bakeriesrest />} />
                        <Route path='/traditionalrest' exact component={() => <Traditionalrest />} />
                        <Route path='/pastarest' exact component={() => <Pastarest />} />
                        <Route path='/dessertrest' exact component={() => <Dessertrest />} />
                        <Route path='/seafoodrest' exact component={() => <Seafoodrest />} />
                    </Router>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
export default App;