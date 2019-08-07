import React from 'react'

// fn이라는 프로퍼티 전달.
const CounterButton = ({fn, amount, text}) => {

    return (
        <button onClick={ () => { fn(amount) } }>{text}</button>
    )
}
export default CounterButton