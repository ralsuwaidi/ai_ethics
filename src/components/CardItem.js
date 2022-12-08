import { Link } from "react-router-dom";
import CardIconList from "./CardIconList";

export const CardItem = (props) => {
  return (
    <Link to={`user/` + props.event.username}>
      <div className="md:max-w-md md:mx-auto mx-3 md:m-2 bg-white border border-gray-200 rounded-2xl  dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-2xl object-cover w-full h-32"
          src={props.event.image}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
            {props.event.name}
          </h5>
          <p className="mb-3 font-sm text-sm text-gray-500 dark:text-gray-400 text-ellipsis overflow-hidden">
            {props.event.headline}
          </p>
            <CardIconList event={props.event}/>
        </div>
      </div>
    </Link>
  );
};
