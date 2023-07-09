const UserInput = (props) => {

    return (
        <div>
            <h3>{props.currencyName}</h3>
            <input
                className='form-control'
                type="text"
                id={props.currencyName}
                onInput={props.onChange}
                value={props.textValue}
            />
        </div>
    )
}

export default UserInput