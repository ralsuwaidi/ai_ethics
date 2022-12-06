

function RadioWrapper(props) {
    return (
        <fieldset onChange={props.onChangeValue}>
            <legend className="contents text-base font-medium text-gray-900">{props.name}</legend>
            <p className="text-sm text-gray-500">{props.description}</p>
            <div className="mt-4 space-y-4">

            {props.children}

            </div>
        </fieldset>
    );
}

export default RadioWrapper;