import React from 'react'
import ReactDOM from 'react-dom'

class App_result extends React.Component{
  render(){
    return(
      <div>
        <div className="score">
          スコア:100
        </div>
        <div className="user_name">
          名前:あごあご
        </div>
        <form action ="result.html" >
          <input type="hidden" name="score" value="100" />
          <input type="hidden" name="usr_name" value="あごあご" />
          <input type="submit" value="送信！！" />
        </form>
      </div>
    )
  }
}


ReactDOM.render(
  <App_result />,
  document.getElementById('name')
)
