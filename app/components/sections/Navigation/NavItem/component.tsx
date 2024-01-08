import * as React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { NavItemProps } from './component.types'

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
}

const NavItem: React.FC<NavItemProps> = (props) => {
	const { t } = useTranslation()

	return (
		<motion.li
			className='hover:text-primary-100 m-0 mb-5 flex cursor-pointer items-center p-0 text-xl transition-colors duration-300'
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.3 }}>
			{t(props.title)}
		</motion.li>
	)
}

export default NavItem