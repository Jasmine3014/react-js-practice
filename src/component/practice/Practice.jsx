import React, {Component} from "react";

class Child extends Component {
    render() {
        return(
            <div>
                <h2>I' am child</h2>
                {this.props.func(this)}
            </div>
        );
    }
}

class ChildComponent extends Component {
    render() {
        return(
            <div>
                <h1>I am Child Component</h1>
                <p>i don't know what to do</p>
                {this.props.children}
            </div>
        );
    }
}
// const ChildComponent = (props) => {
//     <div>
//         <h1>I am Child Component</h1>
//         <p>i don't know what to do</p>
//         {props.children}
//     </div>
    
// }


class Practice extends Component {

    getContext(context) {
        console.log(context);
        
    }

    render() {
        // this.getContext(this);

        return(
            <div>
                <h3 style={{textAlign: 'center', background: 'gray', padding: '8px'}}>This is my Practice ground...!!</h3>
                {/* <Child func={this.getContext} /> */}
                <ChildComponent>
                    <h1>I am Parent Component</h1>
                    <p>i am child of child Component</p>
                </ChildComponent>

            </div>
        );
    }

}

export default Practice;