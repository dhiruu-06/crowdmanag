import React, {Component} from 'react';
import Fimage from '../images/empty.jpg';
import './App.css';

class Fourth extends Component{
    render(){
        return(
            <div class="sheader">
               <h2>Find your self empty seat</h2>
               <h3>Finding yourself empty seat or a comfortable space is easy</h3>
               <div>
                    <img className="simage" src={Fimage}/>
               </div>
            </div>
        )
    }
}
export default Fourth;