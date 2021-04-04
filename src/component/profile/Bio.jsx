import React from "react";

class Bio extends  React.Component{
    render(){
        return(
            <div className="Bio">
                <h1>{this.props.name}</h1>
                <p>{this.props.title}</p>
                <p>{this.props.dept}</p>
           </div>
            );
    }

} 

 export default  Bio; 