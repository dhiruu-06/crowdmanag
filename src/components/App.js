import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import Second from './Second';
import Fourth from './Fourth';
import {Link } from 'react-router-dom';
import login from './login';



class App extends Component{
    render(){
        return(
          
            <div class="second">
           
            <div class="background">
                <div class="header">
                    <h2>CrowdManagement</h2>
                    <div class="content">
                        <h3>Simplifies your daily travel</h3>
                        <p>Plan your travel before boarding in the train, find yourself
                         a proper 
                        seat or comfortable space!</p>
                             <div class="search">
                                 <h3>Login and enjoy our services:)</h3>
                                 <Link to="/login">
                                 <Button 
                                 type="button"
                                 className="btn"
                                 > Login </Button></Link>
                                
                             </div>  
                    </div>
                </div>
            </div>
           
           
            <Second/>
            <Fourth/>
            </div> 
            
          
            
        )
    }
}
export default App;