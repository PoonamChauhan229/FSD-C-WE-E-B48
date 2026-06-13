import { useReducer } from "react"
const UseReducerComponent=()=>{
    // complex state >> objects
    // multiples values , current sate is dependenat state on prev stateco    
    type State={
        count:number,
        n:number
    }
    const initialState:State={
        count:10,
        n:20
    }
    type Action=
    |{type:"decrement"}
    |{type:"increment"}
    |{type:"reset"}

    const reducer=(state:State,action:Action):State=>{
        if(action.type=="increment"){
            console.log("Increment",state)
            return {count:state.count+1,n:state.n+1}
        }
        if(action.type=="decrement"){
            console.log("decrement",state)
            return {count:state.count-1,n:state.n-1}
        }
        if(action.type=="reset"){
            console.log("reset",0)
            return {count:0,n:0}
        }
        return state
    }

    const [state,dispatch]=useReducer(reducer,initialState)
    // state >> current State
    // dispatch >> function send actions >> dispatch()
    // reducer  >> function update the state/ print and return
    // dispacth an action & reducer function will update the state
    return(
        <>
            <h1>Hello World-UseReducer</h1>
            <h2>Count :{state.count}||{state.n}</h2>
            <button onClick={()=>dispatch({type:"increment"})}>Inc</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Dec</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        
        </>
    )
}
export default UseReducerComponent