import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

import Search from '../components/glossary-search';

const navigation = [
    { label: 'Contents', path: '/' },
    { label: 'Using This Reference', path: '/introduction' },
    { label: 'Setup', path: '/setup' },
    { label: 'Glossary', path: '/glossary' },
    { label: 'FAQ', path: '/faq' },
];

export default function MainNav() {
    return (
        <Disclosure as="nav" className="bg-gray-800 w-screen sticky top-0 max-h-screen flex flex-col items-stretch z-50">
            {({ open }) => (
                <>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center w-full">
                                <div className="hidden md:block">
                                    <div className="flex items-baseline space-x-4 -ml-3">
                                        {navigation.map(({ label, path }, itemIdx) =>
                                        (
                                            <a
                                                key={path}
                                                href={path}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                {label}
                                            </a>
                                        )
                                        )}
                                    </div>
                                </div>
                                <div className="mr-3 md:ml-6 md:mr-0 flex-grow">
                                    <Search />
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden overflow-y-auto">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map(({ label, path }, itemIdx) =>
                            (
                                <Fragment key={path}>
                                    <a
                                        key={path}
                                        href={path}
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {label}
                                    </a>
                                    {/* <div className="pl-2 pb-3 space-y-1 sm:px-3">
                                                {['1', '2', '3', '4', '5'].map((section) =>
                                                    <a
                                                        key={section}
                                                        href="#"
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                                    >
                                                        Section {section}
                                                    </a>
                                                )}
                                            </div> */}
                                </Fragment>
                            )
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
};
