import { Transition } from '@headlessui/react';

export default function TransitionOpacity({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-opacity delay-200 duration-700'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
