import React from "react";

function Highlights(props) {
  return (
    <div>
      <h3 className="text-lg md:text-2xl font-semibold md:font-bold mb-5 md:mb-5">
        Highlights
      </h3>
      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {props.highlights.map((highlight) => (
            <li key={highlight} className="text-gray-400">
              <span className="text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Highlights;
