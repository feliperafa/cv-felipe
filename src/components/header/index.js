import { Fragment } from 'react';

import {
	Container,
	ContainerLogo,
	Logo,
	ContainerContent,
	ContainerMenu,
	MenuTitle,
	LinkLogo,
	LogoName,
} from './style';

// imports icones
import LogoPerfil from '../../images/foto-perfil.jpg';

//import informações
import { InforData } from './data';

export function Header() {
	return (
		<Container>
			<ContainerContent>
				<ContainerLogo>
					<LinkLogo to="/">
						<Logo src={LogoPerfil} alt="logo" />
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
