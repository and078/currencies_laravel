import React, {memo} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



export default memo(function UserInput(props) {

    return (
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">{props.currencyName}</span>
            <input
                className='form-control'
                // inputmode="numeric"
                type="text"
                // pattern="[0-9]*.*"
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm"
                id={props.currencyName}
                onInput={props.onInput}
                onFocus={props.onFocus}
                value={props.textValue}
            />
        </div>
    );
}); 