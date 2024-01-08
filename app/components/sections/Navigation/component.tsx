'use client'

import * as React from 'react'
import { motion, useCycle } from 'framer-motion'
import NavList from './NavList/component'
import MenuToggle from './MenuToggle/component'

const sidebar = {
	open: {
		clipPath: `circle(135% at 90% 44px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	},
	closed: {
		clipPath: 'circle(3% at 90% 44px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}

const Navigation = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)

	return (
		<nav className='flex w-full gap-4'>
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				className='absolute inset-y-0 right-0 w-full'
				>
				<NavList/>
				
				<motion.div className='absolute z-0 h-screen w-screen bg-white' variants={sidebar} />
				<MenuToggle handleNav={() => toggleOpen()} />
			</motion.div>
		</nav>
	)
}

export default Navigation