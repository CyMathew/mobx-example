import React from 'react'
import { observer } from 'mobx-react-lite';
import Store from './Store.js';

const OutsideView = observer(() => {

    let style = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        color: Store.outsideDetail
    }

    function outsideClick(event) {
        Store.changeInsideDetail();
        event.preventDefault();
    }
    return (
        <div style={style}>
            <h3>Outside Text</h3>
            <button onClick={outsideClick}>Outside Button</button>
        </div>
    )
})


export default OutsideView