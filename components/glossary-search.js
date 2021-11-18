import { Fragment, useState } from "react";

import { Popover, Transition } from '@headlessui/react'

// import { useSelect } from 'react-select-search-nextjs';

// const options = [
//     {name: 'Swedish', value: 'sv'},
//     {name: 'English', value: 'en'},
//     {
//         type: 'group',
//         name: 'Group name',
//         items: [
//             {name: 'Spanish', value: 'es'},
//         ]
//     },
// ];
const Search = () => {
    const [input, setInput] = useState();

    return (
        <div>
            {/* <input
                type="search"
                className="text-white block w-full bg-transparent rounded-md border-gray-500 focus:border-white focus:ring focus:ring-indigo-300 focus:ring-opacity-50 h-10"
                placeholder="Search"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            /> */}
      <Popover className="relative">
        {(popProps) => {
            console.log(popProps);
            return (
                <>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                    <Popover.Panel static className="fixed z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            Results
                        </div>
                        <div className="p-4 bg-gray-50">
                            <a
                            href="##"
                            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                            <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                Documentation
                                </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                                Start integrating products and tools
                            </span>
                            </a>
                        </div>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </>
            );
        }}
      </Popover>
        </div>
    );
};

export default Search;