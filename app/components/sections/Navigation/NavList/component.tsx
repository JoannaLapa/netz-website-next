import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import NavItem from '../NavItem/component'
import LanguageAccordion from '../LanguageAccordion/component'

const titles = ['aboutUs', 'offer', 'fleet', 'contact']

const variants = {
	open: {
		transition: { staggerChildren: 0.1, delayChildren: 0.3 },
	},
	closed: {
		transition: { staggerChildren: 0.1, staggerDirection: -1 },
	},
}
const NavList = () => {
    const { t } = useTranslation()

	return (
		<motion.ul variants={variants} className='absolute top-[100px] z-20 w-[230px] p-10'>
			{titles.map(title => (
				<NavItem key={t(title)} title={t(title)} />
			))}
			<LanguageAccordion />
		</motion.ul>
	)
}

export default NavList
