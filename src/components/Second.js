import React, {Component} from 'react';
import Simage from '../images/backg.jpg';
import './App.css';

class Second extends Component{
    render(){
        return(
            <div class="sheader">
               <h2>Hassle free travel </h2>
               <h3>Get real time data of crowd density and plan your travel accordingly</h3>
               <div>
                    <img className="simage" src={Simage}/>
               </div>
            </div>
        )
    }
}
export default Second;