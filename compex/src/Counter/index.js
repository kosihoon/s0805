import React, {Component, Fragment} from 'react'
import CounterButton from './CounterButton';
import { thisTypeAnnotation } from '@babel/types';
import CounterDisplay from './CounterDisplay';


export default class Counter extends Component{

    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    // 전달용 함수. 뷰에서 뷰 모델에 데이터를 바꿔야한다고 전달하는 함수가 필요하다.
    // 만들고 난 다음에는 레퍼런스(리모컨)을 전달해줘야 뷰에서 쓸 수 있게 된다.
    // 근데 이게 많아지면 구조가 복잡해지니 나온 개념이 REDUX다.
    increase = (amount) => {
        //얘는 머지가 된다? 
        this.setState(
            {count: this.state.count + amount}
        )
    }

    render(){
        return(
            <Fragment>
                <CounterDisplay count={this.state.count}></CounterDisplay>
                <CounterButton fn={this.increase} amount={1} text={"Add"}></CounterButton>
                <CounterButton fn={this.increase} amount={-1} text={"Minus"}></CounterButton>
            </Fragment>
        )
    }
}