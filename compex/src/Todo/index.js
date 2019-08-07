import React, {Component} from 'react'
import TodoList from './TodoList';


export default class Todo extends Component{

    constructor(){
        super()

        // todos가 화면에 뿌려질 배열. todoList가 얘를 받는다.
        this.state = {
            todos:[
                {tno:1, title:'Todo1'},
                {tno:1, title:'Todo1'},
                {tno:1, title:'Todo1'}
            ]
        }
    }


    render(){
        return(
            <div style={BackGround}>
                <h1>Todo index</h1>
                <TodoList todos={this.state.todos}></TodoList>
            </div>
        )
    }
}
const BackGround = {
    backgroundColor: 'aqua',
    display: 'flex',
    height: '20em',
    flexDirection: 'column'
}