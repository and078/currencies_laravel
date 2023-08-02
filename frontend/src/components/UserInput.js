import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const UserInput = (props) => {

    return (
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">{props.currencyName}</span>
            <input
                className='form-control'
                type="text"
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm"
                id={props.currencyName}
                onInput={props.onChange}
                value={props.textValue}
            />
        </div>
    )
}

export default UserInput

