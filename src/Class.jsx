import React from "react";
import propTypes from 'prop-types';
import Styles from './styles.module.css'
class Class extends React.Component{
render(){
    return(
<>
<p>hello</p>
<h2 className={Styles.luffy}>{this.props.str}</h2>
</>
    )
}
}
Class.propTypes={
    str:propTypes.array,
}
Class.defaultProps={
str:"Luffy",
}


export default Class;