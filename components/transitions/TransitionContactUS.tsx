import { Transition } from '@headlessui/react';

export default function TransitionPR({ children }) {
  return (
    <Transition
      show={true}
      appear={true}
      enter='transition-all delay-200 duration-1000'
      enterFrom='w-0'
      enterTo='w-full xl:pr-40 '
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <> {children}</>
    </Transition>
  );
}
