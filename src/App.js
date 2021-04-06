import { Component } from "react";
import Practice from "./component/practice/Practice";
import Profile from "./component/profile";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.count = 5;
  // }
  state ={
    count:5
  }
  render(){
    // console.log(this.count);

  return (
    <div className="App">
        {/* <Practice /> */}
        <h4>Count value = {this.state.count}</h4>
        <button onClick={() =>{
            this.setState({count: this.state.count +1})
            // console.log('clicked',this.state.count);


        }
        }>Add me</button>

         {/* <Profile name="Jasmine Akter" age="23" /> */}
         {/* <Profile name="Abdur Rahman" age="27"/> */}
    </div>
  );
}
}

export default App;
