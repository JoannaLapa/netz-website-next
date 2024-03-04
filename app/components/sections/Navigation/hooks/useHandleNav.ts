import { useEffect, useRef } from 'react';
import { useCycle } from 'framer-motion';

const useHandleNav = () => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    const modalElement = ref.current;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalElement?.showModal();
    } else {
      document.body.style.overflow = 'auto';
      modalElement?.close();
    }
  }, [isOpen]);

  return { ref, toggleOpen, isOpen };
};

export default useHandleNav;
