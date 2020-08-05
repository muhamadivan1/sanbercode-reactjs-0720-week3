import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.time < 0 ) {
      this.componentWillUnmount();
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }


  render(){
    return(
      <>
        {this.state.time >= 0 &&
        <h1 style={{textAlign: "center"}}>Hitung Mundur: {this.state.time}</h1>
        }
      </>
    )
  }
}

export default Timer