import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { attributes, react as AboutCompnent } from '../../content/popup.md';


export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(true)
  let { image } = attributes;

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="w-full h-4">
                  <button
                    type="button"
                    className="float-right inline-flex justify-center px-2 py-1 text-sm font-sm text-white bg-red-600 border border-transparent rounded-md hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:bg-red-600"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <img src={ image } />
                  </p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
