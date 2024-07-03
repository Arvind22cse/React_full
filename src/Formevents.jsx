import React from 'react';
class Formevents extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
        this.a=this.a.bind(this);
    }
    a(event){
        this.setState({value:event.target.value})
    }
    render(){
        return(
            <>        
            <hr />
            <h1>Form Events</h1>

            <input type="text" onChange={this.a}/>
            <p>{this.state.value}</p>
</>

        );
    }
}
export default Formevents;