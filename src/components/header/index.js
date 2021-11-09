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

// Iports icones
import LogoPerfil from '../../images/foto-perfil.jpg';

export function Header() {
	const inforData = [
		{
			nameMenu: 'Sobre',
			link: '/sobre',
		},
		{
			nameMenu: 'Experiencia',
			link: '/experiencias',
		},
		{
			nameMenu: 'Contato',
			link: '/contatos',
		},
		{
			nameMenu: 'Rede sociais',
			link: '/rede-sociais',
		},
	];

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
					{inforData &&
						inforData.map((el, index) => (
							<Fragment key={index}>
								<MenuTitle to={el.link}>{el.nameMenu}</MenuTitle>
							</Fragment>
						))}
				</ContainerMenu>
			</ContainerContent>
		</Container>
	);
}
