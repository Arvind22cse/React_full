import React from "react";
class Error extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:true};
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo,
        })
    }
    render(){
        if(this.state.hasError){
            return <h1>It has error</h1>
        }
        return this.props.children;
    }
}
export default Error;