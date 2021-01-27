import React, { Component } from "react";
import SnakeGame from "../modules/Snake/SnakeGame.jsx"
import "../../utilities.css";

class TagYourself extends Component {
    constructor(props) {
        super(props);

    }
    
    
    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <p>
                    The real reason this website fits the theme of "tag yourself"
                </p>
                <p>
                    The only way to win this game of snake is by... Tagging yourself of course!
                </p>
                <p>
                    You only win if you tag your tail; if your head touches any other section of your body, you lose!
                </p>
                <p>
                    Eating more food before tagging yourself grants higher scores.
                </p>
                <SnakeGame/>
            </>
        )};
}

export default TagYourself;