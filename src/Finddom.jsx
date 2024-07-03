import React from "react";
import ReactDOM from "react-dom";
class Finddom extends React.Component{
    constructor(props){
        super(props);
        this.finddom1=this.finddom1.bind(this);
        this.finddom2=this.finddom2.bind(this);

    }
    finddom1(){
        var f1=document.getElementById("c1");
        ReactDOM.findDOMNode(f1).style.color='red';
    }
    finddom2(){
        var f2=document.getElementById("c2");
        ReactDOM.findDOMNode(f2).style.color='green';
    }
    render(){
        return(
            <>
            <h1>FindDOMNode</h1>
            <button type="submit" onClick={this.finddom1}>FindDom1</button>
            <button type="submit" onClick={this.finddom2}>FindDom2</button>
            <p id="c1">Find1</p>
            <p id="c2">Find2</p>
<hr />
            </>
        )
    }
}
export default Finddom;