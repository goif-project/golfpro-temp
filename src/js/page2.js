import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component{
  localHandleClick(){
    this.props.localHandleClick(this.props.increment)
  }
  render(){
    return (
      <button onClick={this.localHandleClick}>{this.props.increment}</button>
    )
  }
}

class Result extends React.Component{
  render(){
    return(
      <div>{this.props.localCounter}</div>
    )
  }
}
class Main extends React.Component{
  constructor(props){
    super(props);                                               this.state = {
      counter: 1,
    }
  }
	//ボタンがクリックされたら
  handleClick(increment){
    this.setState({counter:increment})
  }
  render(){
    return(
      <div className="char_set">
        <div className="result_wrap">
          <Result localCounter={this.state.counter} />
        </div>
        <div className="btn_wrap">
          <Button localHandleClick={this.handleClick} increment={1} />
          <Button localHandleClick={this.handleClick} increment={2} />
          <Button localHandleClick={this.handleClick} increment={3} />
          <Button localHandleClick={this.handleClick} increment={4} />
        </div>
        <form action="page3.html" method="post">
          <input type="hidden" name="counter_num" value={this.state.counter} />
          <button className="connect" type="submit" name="coutner_btn" Onclick="funcBtn();">
            送信
          </button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("page2")
 )
