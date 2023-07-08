const UserInput = (props) => {

    return (
        <div>
            <h1>{props.currencyName}</h1>
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