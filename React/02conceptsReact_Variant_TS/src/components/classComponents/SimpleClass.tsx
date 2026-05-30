import React from "react"

type SimpleClassProps={
    fname:string
}

export class SimpleClass extends React.Component<SimpleClassProps>{
    render(){
        return(
            <>
                <h1>Welcome Class Component-{this.props.fname}</h1>
            </>
        )
    }
}

//default export default ||import 
//named export ||import >{}