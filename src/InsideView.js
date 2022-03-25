import React from 'react'
import Store from './Store.js';
import { observer } from 'mobx-react-lite'

const defaultStyle = {
    border: '2px solid blue',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between'
}

const InsideView = observer(() => {
    let style = {
        ...defaultStyle,
        color: Store.insideDetail
    }

    function insideClick(event) {
        Store.changeOutsideDetail();
        event.preventDefault();
    }
    return (
        <div style={style}>
            <h3>Inside Text</h3>
            <button onClick={insideClick}>Inside Button</button>
        </div>
    )
});

export default InsideView