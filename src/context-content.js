import React from "react";
import { userContext } from './context';

export default function Content2(){
    let user = React.useContext(userContext)

    const contentStyle = {
    backgroundColor:'#ddd',
    textAlign:'center',
    margin:10,
    padding:10
    }

    return (
        <div style={contentStyle}>
            What's up {user}
        </div>
    )
}