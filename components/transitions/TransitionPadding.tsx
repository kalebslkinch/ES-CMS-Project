import { Transition } from '@headlessui/react';

export default function TransitionPadding({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all duration-500'
      enterFrom='flex flex-row justify-center h-0 '
      enterTo='max-w-screen flex flex-row justify-center h-full'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
