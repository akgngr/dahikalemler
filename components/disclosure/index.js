import { Disclosure } from '@headlessui/react';
import { FaChevronCircleUp } from 'react-icons/fa';

export default function Tabs(props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-900 bg-yellow-300 rounded-lg hover:bg-yellow-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>{props.soru}</span>
            <FaChevronCircleUp className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-yellow-900`} />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 prose prose-lg w-full">
            <div dangerouslySetInnerHTML={{ __html: props.text }} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
