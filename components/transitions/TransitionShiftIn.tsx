import { Transition } from '@headlessui/react';

export default function TransitionShiftIn({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-300 duration-1000'
      enterFrom='opacity-0 py-64 scale-150'
      enterTo='opacity-100 py-0 scale-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
