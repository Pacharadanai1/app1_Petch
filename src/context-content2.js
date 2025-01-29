import React from "react";
import { userContext } from "./context";

export default function Content3() {
    let [user,setUser] = React.useContext(userContext)

    const contentStyle = {
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:5
    }

    const onClickSignin = (event) => {
        event.preventDefault()
        setUser('สุดหล่อ')
    }

    return(
        <div style={contentStyle}>
            {
                (user)
                ?<span>Hello {user}</span>
                :<span>Please <a href=" " onClick={onClickSignin}>Signin</a></span>
            }
        </div>
    )
}