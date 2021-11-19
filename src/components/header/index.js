import React, { Fragment, useEffect } from 'react';

//import css
import {
	Container,
	ContainerLogo,
	ContainerContent,
	MenuTitle,
	LinkLogo,
	LogoName,
} from './style';

//import informações
import { InforData } from './data';

export function Header() {
	useEffect(() => {
		let show = true;
		let menuSection;
		let menuToggle;
		if (typeof window !== 'undefined') {
			menuSection = document.querySelector('.menu-section');
			menuToggle = menuSection.querySelector('.menu-toggle');

			menuToggle.addEventListener('click', () => {
				document.body.style.overflow = show ? 'hidden' : 'initial';

				menuSection.classList.toggle('on', show);
				show = !show;
			});
		}
	}, []);

	// const [show, setShow] = useState(false);

	// const hasWindow = typeof window !== 'undefined';
	// const updateMedia = () =>
	// 	hasWindow && setShow(window.screen.availWidth < 768);

	// useEffect(() => {
	// 	if (hasWindow) {
	// 		window.addEventListener('resize', updateMedia);
	// 		return () => window.removeEventListener('resize', updateMedia);
	// 	}
	// });

	return (
		<Container>
			<ContainerContent>
				<ContainerLogo>
					<LinkLogo to="/">
						<LogoName>Felipe Barros</LogoName>
					</LinkLogo>
				</ContainerLogo>

				<div className="menu-section">
					<div className="menu-toggle">
						<div className="one"></div>
						<div className="two"></div>
						<div className="three"></div>
					</div>
					<nav>
						{InforData &&
							InforData.map((el, index) => (
								<Fragment key={index}>
									<MenuTitle to={el.link}>{el.nameMenu}</MenuTitle>
								</Fragment>
							))}
					</nav>
				</div>
			</ContainerContent>
		</Container>
	);
}
