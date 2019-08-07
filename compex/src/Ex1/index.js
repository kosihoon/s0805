import React, {Component} from 'react'
import PrintName from './PrintName';
import PrintArr from './PrintArr';
import PrintSum from './PrintSum'

export default class Ex1 extends Component{

    // 데이터를 자른다고?
    // state는 객체다. 배열 아니다.
    constructor(){
        super()
        this.state = {
            // 배열 내부를 자바스크립트 객체로 채웠다.
            // View Model에 있는거라 selected 붙였다.
            arr: [
                {pcode: 1, pname: '연필', price: 300, selected: false},
                {pcode: 2, pname: '노트', price: 800, selected: false},
                {pcode: 3, pname: '샤프', price: 2000, selected: false},
                {pcode: 4, pname: '축구공', price: 13000, selected: false}
            ]
        }
    }


    checkProduct = ( {pcode} ) => {

        //console.log(pcode)

        const target = this.state.arr.filter((obj) =>  obj.pcode === pcode)[0]

        //console.log(target);

        const idx = this.state.arr.indexOf(target)

        //console.log(idx)

        this.state.arr[idx].selected =  !this.state.arr[idx].selected

        this.setState( {arr: this.state.arr})
    }


    render(){

        // this.state.arr의 값
        const {arr} = this.state

        return(
            <div>
                <PrintArr arr={arr} fn={this.checkProduct}></PrintArr>
                <PrintSum arr={arr}></PrintSum>
                <PrintName name={"Hong Gil Dong"}></PrintName>
            </div>
        )
    }

}