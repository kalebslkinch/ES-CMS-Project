import { Transition } from '@headlessui/react';

export default function TransitionWidth({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-200 duration-1000'
      enterFrom='pl-64'
      enterTo='pl-0'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
