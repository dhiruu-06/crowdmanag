import React, {Component} from 'react';
import fire from './fire';
import limage from '../images/background.jpg';
import './App.css';
import {Link } from 'react-router-dom';
import station from './station';
import stationn from './stationn';
import stationnn from './stationnn';
import stationnnn from './stationnnn';
import login from './login';


class Home extends Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <h1> Railway Lines </h1>

      <div >
        <img className="limage" src={limage}/>
      </div>

      <Link to="/station">
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Central Line</button>
      </div></Link>
      
      <Link to="/stationn">
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Wester Line</button>
      </div></Link>

      <Link to="/stationnn">
      <div style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Harbour Line</button>
      </div></Link>

      <Link to="/stationnnn">
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >All</button>
      </div></Link>

       
       <div  style={{padding: '25px 25px', margin:'10px 10px' }}className="logout">
       <Link to="/login"> 
        <button >Logout</button>
        </Link>
       </div>
       
      </div>
    )
  }
}

export default Home;