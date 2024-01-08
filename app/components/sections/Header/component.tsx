import * as React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation/component';
import Wrapper from '../../ui/Wrapper/component';

export const Header = () => {
	return (
		<Wrapper>
			<header className='flex w-full items-center justify-between'>
				<Image alt='Company logo Netz with green net' src='/netz-website-next/public/assets/images/icon.png' className='w-4/12' width={176} height={65}/>

				<Navigation />
			</header>
		</Wrapper>
	);
};
