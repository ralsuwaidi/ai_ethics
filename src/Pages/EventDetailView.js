import directoryForm from "../components/Form";
import { Breadcrumb, Button, Modal, Timeline } from "flowbite-react";
import { HiListBullet } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Helmet } from "react-helmet-async";
import CardIconList from "../components/CardIconList";
import Metadata from "../components/Metadata";
import Detail from "../components/Detail";
import Highlights from "../components/Highlights";
import DefaultTimeline from "../components/DefaultTimeline";
import { ImLinkedin } from "react-icons/im";

export default function EventDetailView() {
  let { userId } = useParams();
  const user = data.directorys.find((obj) => obj.username === userId);

  return (
    <>
      {/* Page Metadata */}
      <Helmet>
        <title>{user.name}</title>
        <meta name="description" content={user.headline} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white max-w-2xl lg:max-w-7xl mx-auto px-3  ">
        <div className="pt-6">
          <Breadcrumb aria-label="Default breadcrumb">
            <Breadcrumb.Item href="/ai_community_directory" icon={HiListBullet}>
              Directory
            </Breadcrumb.Item>
            <Breadcrumb.Item>{user.username}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-4 relative">
            <img
              src={user.banner}
              className="lg:col-span-2 h-64 lg:h-52 w-full object-cover rounded-xl"
            />
            <div className="absolute top-2/3 left-12 border-solid border-white rounded-full border-4">
              <img
                src={user.image}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="mt-16 pb-16 lg:px-4 lg:mt-20 lg:pb-24">
            <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8 border-b pb-5">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {user.name}
              </h1>

              {/* <span className="text-base font-light">test</span> */}

              {/* Description and details */}
              <p className="text-sm text-gray-900">{user.headline}</p>
              <p className="text-sm text-gray-500">{user.position}</p>

              <div className="flex justify-between mt-5">
                <div>
                  <div>
                    <CardIconList event={user} />
                  </div>
                </div>
                <div className="flex">
                  
                  {user.socials.map((social) => (
                    
                    <a href={social.url} className="ml-4">
                      {social.icon}
                    </a>
                  ))}

                </div>
              </div>
            </div>

            {/* Event info */}
            <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 ">
              <div className="py-10 lg:col-span-2 px-2 sm:px-0 lg:col-start-1 border-b md:border-b-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-16 lg:pr-8">
                <Detail title="About" detail={user.about} />

                <div className="mt-10 pb-5">
                  <Highlights highlights={user.highlights} />
                </div>
                <div className="mt-10">
                  <Metadata metadata={user.metadata} />
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-4 lg:mt-0">
                <DefaultTimeline timeline={user.timeline} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
