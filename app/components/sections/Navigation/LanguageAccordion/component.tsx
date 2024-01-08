import { motion } from 'framer-motion';
import { languages } from '../../../../i18n/settings'
import Link from 'next/link';

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
const LanguageAccordion = () =>  {

	return (
		<motion.li variants={variants}>
			<ul className='flex gap-2 text-xl'>
				{languages.map((l) => 
					<li key={l}>
						<Link
							href={`/${l}`}
							>
							{l}
						</Link>
					</li>
				)}
			</ul>
		</motion.li>
	)
}

export default LanguageAccordion;