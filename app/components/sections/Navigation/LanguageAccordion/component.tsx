import { motion, useCycle } from 'framer-motion';
import Button from './Button/component';
import AccordionList from './AccordionList/component';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const LanguageAccordion: React.FC<LanguageAccordionProps> = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <>
      <motion.li variants={variants} className="p-4 sm:hidden">
        <Button lng={props.lng} isOpen={isOpen} handleClick={handleClick} />

        {isOpen && <AccordionList lng={props.lng} isOpen={isOpen} />}
      </motion.li>
      <li className="relative z-30 hidden p-4 sm:block">
        <Button lng={props.lng} isOpen={isOpen} handleClick={handleClick} />

        {isOpen && <AccordionList lng={props.lng} isOpen={isOpen} />}
      </li>
    </>
  );
};

export default LanguageAccordion;
