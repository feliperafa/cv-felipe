import { Fragment } from 'react';
import {
	Container,
	ContainerLogo,
	Logo,
	ContainerContent,
	ContainerMenu,
	MenuTitle,
	LinkLogo,
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
			link: '/experiencia',
		},
		{
			nameMenu: 'Contato',
			link: '/contato',
		},
		{
			nameMenu: 'Rede sociais',
			link: '/rede-social',
		},
	];
	console.log(inforData);
	return (
		<Container>
			<ContainerContent>
				<ContainerLogo>
					<LinkLogo to="/">
						<Logo src={LogoPerfil} alt="logo" />
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
