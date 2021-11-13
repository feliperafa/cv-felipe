import React, { Fragment, useEffect, useState } from 'react';
import {
	Container,
	ContainerLogo,
	ContainerContent,
	ContainerMenu,
	MenuTitle,
	LinkLogo,
	LogoName,
	Hamburger,
	containerButton,
} from './style';
import { FaExpand, FaStream } from 'react-icons/fa';

//import informações
import { InforData } from './data';

export function Header() {
	const [show, setShow] = useState(false);
	const [isHide, setHide] = useState(false);

	const hasWindow = typeof window !== 'undefined';
	const updateMedia = () =>
		hasWindow && setShow(window.screen.availWidth < 768);

	useEffect(() => {
		if (hasWindow) {
			window.addEventListener('resize', updateMedia);
			return () => window.removeEventListener('resize', updateMedia);
		}
	});

	function toggleMenu() {
		setHide(!isHide);
	}

	return (
		<Container>
			<ContainerContent>
				<ContainerLogo>
					<LinkLogo to="/">
						<LogoName>Felipe Barros</LogoName>
					</LinkLogo>
				</ContainerLogo>
				<containerButton>
					<Hamburger onClick={toggleMenu} isHide={isHide}>
						{isHide ? <FaExpand /> : <FaStream />}
					</Hamburger>
				</containerButton>
				<ContainerMenu isHide={isHide} show={show}>
					{InforData &&
						InforData.map((el, index) => (
							<Fragment key={index}>
								<MenuTitle to={el.link}>{el.nameMenu}</MenuTitle>
							</Fragment>
						))}
				</ContainerMenu>
			</ContainerContent>
		</Container>
	);
}
