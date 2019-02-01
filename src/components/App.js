import React, { Component } from 'react';
import ContentList from './ContentList';
import ContentNum from './ContentNum';

class App extends Component {
  state = { 
    contents: [ {num: 1, title: "hello"}, {num: 2, title: "world"}, {num: 3, title: "react"} ], 
    contentNum: null 
  };

  onSelectItem = (content) => {
    this.setState({contentNum: content.num})
  }

  render() {
    return (
      <div>
        <ContentList 
          contents={this.state.contents} 
          onItemSelect={this.onSelectItem}
        />
        <ContentNum contentNum={this.state.contentNum} />
      </div>
    );
  }
}

export default App;