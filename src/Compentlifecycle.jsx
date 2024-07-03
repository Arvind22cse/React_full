import React from 'react';
class Componentlifecycle extends React.Component{
constructor(props){
    super(props);
     this.state={value:"Arvind"}
     this.update=this.update.bind(this);
}
update(){
this.setState({value:"Hello "});
}
componentWillMount(){
    console.log(`your component will be mounted`);
}
componentDidMount(){
    console.log(`your component mounted`);

}
componentWillUpdate(nextProps,nextState){
    console.log(`updating`);
}
componentDidUpdate(prevProps,prevState){
    console.log(`Updated`);
}
render(){
    return(
        <>
        <h1>Componet Life Cycle</h1>
<p>{this.state.value}</p>
<button onClick={this.update}>click</button>

        </>

    )
}
}
export default Componentlifecycle;