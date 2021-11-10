import { Fragment } from 'react';

import {
	Container,
	ContainerLogo,
	ContainerContent,
	ContainerMenu,
	MenuTitle,
	LinkLogo,
	LogoName,
} from './style';

//import informações
import { InforData } from './data';

export function Header() {
	return (
		<Container>
			<ContainerContent>
				<ContainerLogo>
					<LinkLogo to="/">
						{/* <Logo src={LogoPerfil} alt="logo" /> */}
						<LogoName>Felipe Barros</LogoName>
					</LinkLogo>
				</ContainerLogo>
				<ContainerMenu>
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
