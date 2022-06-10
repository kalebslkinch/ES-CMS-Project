import { Transition } from '@headlessui/react';

export default function TransitionInventory({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-700 duration-1000'
      enterFrom='pr-64 opacity-0'
      enterTo='pr-0 opacity-100 '
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
