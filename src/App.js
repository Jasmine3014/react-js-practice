import { Component } from "react";
import Practice from "./component/practice/Practice";
import Profile from "./component/profile";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.count = 5;
  // }
  count =10;

  render(){
    // console.log(this.count);

  return (
    <div className="App">
        {/* <Practice /> */}
        <h4>Count = {this.count}</h4>
         {/* <Profile name="Jasmine Akter" age="23" /> */}
         {/* <Profile name="Abdur Rahman" age="27"/> */}

    </div>
  );
}
}

export default App;
