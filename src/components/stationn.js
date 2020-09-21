
import React, {Component} from 'react';
import fire from './fire';
import limage from '../images/background.jpg';
import './App.css';


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

      
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Central Line</button>
      </div>
      
      
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Wester Line</button>
      </div>

      
      <div style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >Harbour Line</button>
      </div>

      
      <div  style={{padding: '5px 5px', margin:'10px 10px' }} className="raillines">
      <button  >All</button>
      </div>

       
       <div  style={{padding: '25px 25px', margin:'10px 10px' }}className="logout"> 
        <button >Logout</button>
       </div>
       
      </div>
    )
  }
}

export default stationnnn;