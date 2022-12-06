function RadioOption(props) {
    return (
        <>
            <div className="flex items-center">
                <input
                    name={props.id}
                    type="radio"
                    value={props.value}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                    {props.name}
                </label>
            </div>
        </>
    );
}

export default RadioOption;