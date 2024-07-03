import React from "react";
class Forceupdate extends React.Component{
    constructor(props){
        super(props);
        this.update=this.update.bind(this);
    }
    update(){
        this.forceUpdate();
    }
render(){
    return(
        <>
    <hr />
    <h1>Force Update</h1>
    <p>{Math.random()}</p>
    <button type="submit" onClick={this.update} >Generate</button>
    <hr />
    </>
)
}
}
export default Forceupdate;