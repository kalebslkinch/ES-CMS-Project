import { Transition } from '@headlessui/react';

export default function TransitionShippedOrders({ children, length }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-200 duration-1000'
      enterFrom='w-0 opacity-0'
      enterTo={
        length <= 0
          ? 'w-screen xl:pr-24 xl:mr-6 opacity-100'
          : 'w-screen xl:pr-16 xl:mr-6 opacity-100'
      }
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
