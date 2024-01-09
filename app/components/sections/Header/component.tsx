import * as React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation/component';
import { HeaderProps } from './component.types';

const Header: React.FC<HeaderProps> = (props) => {

	return (
			<header className='flex w-full items-center justify-between'>
				<Image alt='Company logo Netz with green net' src='/assets/images/icon.png' className='w-4/12' width={176} height={65}/>

				<Navigation lng={props.lng}/>
			</header>
	);
};

export default Header;