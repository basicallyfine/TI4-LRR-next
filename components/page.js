/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import Head from 'next/head';

// TODO: pull from (somewhere?) and detect active page
const navigation = ['Contents', 'Using This Reference', 'Setup', 'Glossary', 'FAQ'];

export default function Page({ title }) {
    return (
        <div>
            <Head>
                <title>TI4 LRR: {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* TODO: abstract nav into component */}
            <Disclosure as="nav" className="bg-gray-800 w-screen sticky top-0 max-h-screen flex flex-col items-stretch">
                {({ open }) => (
                    <>
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center w-full">
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline space-x-4 -ml-3">
                                            {navigation.map((item, itemIdx) =>
                                            (
                                                <a
                                                    key={item}
                                                    href="#"
                                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    {item}
                                                </a>
                                            )
                                            )}
                                        </div>
                                    </div>
                                    <div className="mr-3 md:ml-6 md:mr-0 flex-grow">
                                        <input type="search" className="text-white block w-full bg-transparent rounded-md border-gray-500 focus:border-white focus:ring focus:ring-indigo-300 focus:ring-opacity-50 h-10" placeholder="Search" />
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
                                {navigation.map((item, itemIdx) =>
                                    (
                                        <Fragment>
                                            <a
                                                key={item}
                                                href="#"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                {item}
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

            <main>
                <div className="max-w-4xl mx-auto py-9 px-6 lg:px-8 prose">
                    <h1>{title}</h1>
                    {/* Replace with your content */}
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    {/* /End replace */}
                </div>
            </main>
        </div>
    )
}
