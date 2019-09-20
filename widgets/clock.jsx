import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID); 
  }

  render() {
    // debugger
    return (<>
    <div>
      <h1 id="clock-title">Clock</h1>
      <div class="clock">
        <p>
          <span>Time: </span>
          <span>{this.state.time.toLocaleTimeString('en-US')} EDT</span>
        </p>
        
        <p>
          <span>Date: </span> 
          <span>{this.state.time.toDateString()}</span>
        </p> 
      </div>

    </div>
    </>);
  }
}

export default Clock;