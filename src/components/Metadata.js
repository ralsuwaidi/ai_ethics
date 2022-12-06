import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Metadata(props) {
  return (
    <div className="overflow-hidden bg-white  sm:rounded-lg">
      <div className="border border-gray-200">
        <dl>
          {props.metadata.map((metadata) => (
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {metadata.key}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {metadata.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
