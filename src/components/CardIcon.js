
function CardLineIcon(props) {
  return (
    <>
    <a href={props.url}>
        <div className="flex border rounded items-center py-0.5 px-1.5 max-w-fit text-gray-500 text-xs">
          <p className="">{props.iconText}</p>
        </div>
        </a>
    </>
  );
}

export { CardLineIcon };
