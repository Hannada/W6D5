import React from 'react'

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }; 
    // debugger 
    // this.title = props.tabs[this.state.tabIndex].title;
    // this.content = props.tabs[this.state.tabIndex].content;
    this.handleClick = this.handleClick.bind(this);
    this.dispContent = null;
  }

  
  handleClick() {
    debugger 
    this.state.tabIndex = 2;
    this.dispContent = this.props.tabs[this.state.tabIndex].content;
  }

  render() {
    // debugger
    return(<> 
      <div> 
        <header>
          <h1 onClick={this.handleClick}>{this.props.tabs[0].title}</h1>
          <h1 onClick={this.handleClick}>{this.props.tabs[1].title}</h1>
          <h1 onClick={this.handleClick}>{this.props.tabs[2].title}</h1>
        </header>
        <article>
          {this.dispContent}
        </article>
      </div>
    </>)
  }
}

export default Tab;