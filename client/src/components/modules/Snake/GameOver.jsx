/*
  I modified the react-simple-snake repository. I modified this so that it will only register wins when the snake bits its own tail,
  and added the logic to handle this.
*/

import React, { Component } from 'react'


class GameOver extends Component {
  constructor(props) {
      super(props);

  }


  componentDidMount() {
      
  }

  render() {
    let endScore = undefined;
    if(this.props.tagYourself) {
      endScore = (
        <div>
          <div>You successfully Tagged Yourself! </div>
          <div>Your score: {this.props.score}</div> 
          <div>
            {this.props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
            {this.props.highScore}
          </div>
        </div>
        
      )
    } else {
      endScore = (
        <div>
          <div>You failed to Tag Yourself :(( </div>
          <div>You would have scored: {this.props.score}</div> 
          <div>
            {'Local '}high score:{' '} {this.props.highScore}
          </div>
        </div>
      )
    }
    return (
      <div
        id='GameBoard'
        style={{
          width: this.props.width,
          height: this.props.height,
          borderWidth: this.props.width / 50,
        }}>
        <div id='GameOver' style={{ fontSize: this.props.width / 15 }}>
          <div id='GameOverText'>GAME OVER</div>
          {endScore}
          <div id='PressSpaceText'>Press Space to restart</div>
        </div>
      </div>
    )
  }
}

export default GameOver;
