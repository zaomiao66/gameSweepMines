import React, { Component } from 'react'
import styles from './GameBoard.scss'

export default class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    console.log(styles.GameBoard)
    return (
      <div className={styles.GameBoard}>这里是游戏面板</div>
    )
  }
}
