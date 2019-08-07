import React from 'react'

// index.js에서 arr뿐만 아니라 fn도 전달해줬으니 받아야 한다.
const PrintArr = ({arr, fn}) => {
    
    // for문을 사용하지 않고 루프를 구현한다.
    // arr에 있는 내용을 바꿔줘. obj가 arr의 i번째라고 생각하면 된다.
    //const result = arr.map((obj, idx) => <li key={idx}>{obj.pname}</li>)
    const result = arr.map(({pcode, pname, price, selected}) =>
     <li key={pcode}> {pname} {price} 
     <input type='checkbox' defaultChecked={selected} onChange={ () => { fn({pcode}) } }></input> 
     </li>)
    
    return(
        <ul>
            {result}
        </ul>
    )
}
export default PrintArr