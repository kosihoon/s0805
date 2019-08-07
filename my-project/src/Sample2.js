import React, {Component} from 'react'

export default class Sample2 extends Component{

    // 생성자.
    constructor(){
        super()
        this.state = {num: 0}
        // this.state가 인스턴스 베리어블이라고 생각하면 된다.
    }

    // 증가시키는 함수.
    increase = () =>{
        const value = ++this.state.num
        alert("increase: " + value)
        this.setState({num: value})
    }

    render(){
        return(
            <div>
                <button onClick={this.increase}>Sample2</button>
            </div>
        )
    }
}

// export default Sample2