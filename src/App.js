import React, { Component } from 'react';
import './App.css';
import TrelloList from "./components/TrelloList"
import { connect } from "react-redux"

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>moneytree</h2>
        <div style={styles.listsContainer}>
          { lists.map(lists => (
          <TrelloList title={lists.title} cards={lists.cards} />
          ))}
        </div>
      </div>
    )
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect (mapStateToProps) (App);
