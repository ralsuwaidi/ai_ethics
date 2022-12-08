function ResultComponent(props) {
    return ( 
        <>
          <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{props.name}: {props.result} </h5>
                </div>
        </>
     );
}

export default ResultComponent;