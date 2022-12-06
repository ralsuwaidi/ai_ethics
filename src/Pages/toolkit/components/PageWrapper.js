
export default function PageWrapper(props){
    return (
        <div className="max-w-2xl lg:max-w-7xl mx-auto px-3 py-5">
            {props.children}
        </div>
    )
}