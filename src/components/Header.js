import { useState } from 'react'
import { Switch } from '@headlessui/react'


const data = {
  title: "AI Community Members",
  subheading: "Find any of our members below",
};

export const Header = () => {


  return (
    <>
      <div className="mb-6 lg:mt-24 mt-12 px-4 md:px-0">
        <p className="font-bold text-3xl">{data.title}</p>
        <p className="mt-1 text-gray-500">{data.subheading}</p>

       {/* <div className='mt-5'>
       <MyToggle />
       </div> */}
      </div>
    </>
  );
};


function MyToggle() {
    const [enabled, setEnabled] = useState(false)
  
    return (
        <Switch.Group>
          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                  enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
                <Switch.Label className="ml-4 text-gray-500 text-sm">Show All</Switch.Label>
          </div>
        </Switch.Group>
      )
  }