import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import Introduction from '../components/Introduction/Introduction'
import GameBoard from '../components/GameBoard/GameBoard'


class GameHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Introduction />
        <GameBoard />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHome)
