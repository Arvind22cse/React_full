import React from "react";
class Uncontrolled extends React.Component{
    constructor(props){
        super(props);
        this.a=this.a.bind(this);
    }
    a(event){
        alert(`You have submitted`);
        event.preventDefault();
    }
    render(){
        return(
<>
<hr/>
<h1>Uncontrolled</h1>
<form onSubmit={this.a}>
    Enter your name:
    <input type="text" ref={this.input} />
    
    <button type="submit">Submit</button>
</form>
<hr/>
</>
        );
    }
}
export default Uncontrolled;