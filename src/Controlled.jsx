import React from "react";
class Controlled extends React.Component{
    constructor(props){
        super(props);
        this.state={value1:''};
        this.state={value2:''};
        this.a=this.a.bind(this);
        this.c=this.c.bind(this);
        this.b=this.b.bind(this);
    }
    a(event){
        this.setState({value1:event.target.value})
    }
    c(event){
        this.setState({value2:event.target.value})
    }
    b(event){
     alert(`You have submitted with name ${this.state.value1} and ${this.state.value2}`);
     event.preventDefault();
    }
    render(){
return(
<form onSubmit={this.b}>
    <h1>Controlled</h1>
    Name:
    <input type="text" onChange={this.a}/>
    email:
    <input type="email" onChange={this.c}/>
    <h1>{this.state.value1}</h1>
    <button type="submit">submit</button>

</form>
)
}
}
export default Controlled;