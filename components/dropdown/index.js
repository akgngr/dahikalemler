import * as React from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

const Dropdown = props => {
  return (
    <>
      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="inline-flex w-full px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out text-white hover:text-gray-300 focus:outline-none active:bg-gray-50 active:text-white-200">
                  <span>{props.name}</span>
                  <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="lg:absolute relative w-56 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="px-4 py-3">
                      <ul>
                        {props.data.map((list, index) => {
                          return (
                            <li key={index}>
                              <Link key={index} href={list.url}>
                                <a>{list.name}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
