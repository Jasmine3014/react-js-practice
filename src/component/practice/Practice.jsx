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


class Practice extends Component {

    getContext(context) {
        console.log(context);
        
    }

    render() {
        this.getContext(this);

        return(
            <div>
                <h3 style={{textAlign: 'center', background: 'gray', padding: '8px'}}>This is my Practice ground...!!</h3>
                <Child func={this.getContext} />
            </div>
        );
    }

}

export default Practice;