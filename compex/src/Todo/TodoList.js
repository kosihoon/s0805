import React from 'react'


const TodoList = ({todos}) => {

    // 배열이니까 map을 돌려야 한다. todos를 매핑한다.
    const list  = todos.map( ({tno, title}) => <li key={tno}> {title} </li> )

    return (
        <ul>
            {list}
        </ul>
    )
}
export default TodoList