import React, { Component } from "react";
import MainPageButton from "../modules/MainPageButton.js"
import ExplainButton from "../modules/ExplainButton.js"

import "../../utilities.css";
import "./MainPage.css";


import 'bootstrap/dist/css/bootstrap.min.css';


class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    
    // componentDidMount() {
    //     if (window.location.hash !== ''){
    //         console.log(window.location.hash)
    //         let section = document.getElementById('about')
    //         console.log(section)
    //         if (section) {
    //             console.log('haha')
    //             section.scrollIntoView({ behavior : "smooth", inline : "nearest"})
    //         }
    //     }



    // }
    componentDidUpdate() {
        if (window.location.hash !== ''){
            console.log(window.location.hash)
            let section = document.getElementById('about')
            console.log(section)
            if (section) {
                console.log('haha')
                section.scrollIntoView({ behavior : "smooth", inline : "nearest"})
            }
        }
    }

    render() {
        // console.log(window.location)
        return (
            
            <>
                <head>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </head>  
                <section id = "MainPage">
                    <h1 className="MainPage-header u-textCenter">
                        <span>STUDY with</span>
                        <span>ME</span>
                    </h1>

                    <div className="MainPage-Button">
                        <MainPageButton/>
                    </div>
                </section>

                <section id='about'>
                    {/* some about info */}
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-6 recent-img"></div>
                        <div className="col-lg-6 recent-text">
                            <h3>What Do</h3>
                            <p>Our mission is to create an enjoyable study environment. Join your customized study room with a cute bear study buddy!</p>
                            <p>
                            Over quarantine or even during normal times, we feel the need to work alone sometimes to keep ourselves focused.
                             Here, we provide a website <i>with a cute bear</i> to give you some company. When you make progress on your plan, 
                             you will earn honey to make your bear happier and cuter. 
                             If you are distracted from entertainments such as YouTube - uh oh - the bear will be sad and your progress may be lost. 
                            Of course, the bear will remind you to take a break and drink some water as it deeply cares about your health.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>

                <section id='ducky'>
                    {/* some ducky info */}
                    <div className="container-fluid">
                        <div className="row">
                        
                        <div className="col-lg-6 recent-text">
                            <h3>Hidden Mode</h3>
                            <p>Coders, we got you :) Explain your code to a cute rubber ducky!</p>
                            <p>
                             In this hidden mode, you will find a cute rubber ducky patiently sitting there. The ducky is eager to learn
                             about your program. It can also time your explaination, but no pressure to do so. When you finish your explaination, just let ducky know
                             by clicking <i>FINISH</i>. Ducky is excited to code and grow with you.
                             
                            </p>
                            <div className="MainPage-ExplainButton">
                    <ExplainButton/>
                </div>
            
                        </div>
                        <div className="col-lg-6 recent2-img"></div>
                        </div>
                    </div>
                </section>

                <footer id="footer">

      <p>© Copyright 2021 Penguins n Phriends</p>



    </footer>
                

            </>
        )
    }
}

export default MainPage;