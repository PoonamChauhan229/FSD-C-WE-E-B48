import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, double, getIntialValues, resetAllValues } from './utilis/counterSlice'

const CounteRtk = () => {
    const counterValues = useSelector((store) => store.counter)
    console.log(counterValues)
    const { value, incrementedValue, decrementedValue, doubledValue, resetValue } = counterValues

    const dispatch = useDispatch() // returns a function
    const incrementValue = () => {
        dispatch(increment())
    }
    return (
        <>
            <div style={{ display: "flex", gap: "5" }}>
                <h4>|| Value:{value} ||</h4>
                <h4>|| incrementedValue:{incrementedValue} ||</h4>
                <h4>|| decrementedValue:{decrementedValue} ||</h4>
                <h4>|| doubledValue:{doubledValue} ||</h4>
                <h4>|| resetValue:{resetValue} ||</h4>
            </div>
            {/* dispatch our actions >> performing the action*/}
            <button onClick={() => { incrementValue() }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(double()) }}>Double</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <button onClick={() => { dispatch(getIntialValues()) }}>GetIntialValues</button>
            <button onClick={() => { dispatch(resetAllValues()) }}>ResetAllValues</button>

        </>
    )
}
export default CounteRtk