   
import React, {Component} from 'react';
import fire from './fire';
import limage from '../images/background.jpg';
import './App.css';
import {Link } from 'react-router-dom';

class stationnnn extends Component {

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

      <Link to="/station1">
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Central Line</button>
      </div></Link>
      
      <Link to="/station2">
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Wester Line</button>
      </div></Link>

      <Link to="/station3">
      <div style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Harbour Line</button>
      </div></Link>

      <Link to="/station4">
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >All</button>
      </div></Link>

       
       <div  style={{padding: '25px 25px', margin:'10px 10px' }}className="logout"> 
        <button >Logout</button>
       </div>
       
      </div>
    )
  }
}

export default stationnnn;