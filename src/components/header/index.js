import { Container, Logo, ContainerLogo } from './style';
import LogoPerfil from '../../images/foto-perfil.jpg';

export function Header() {
	return (
		<Container>
			<ContainerLogo>
				<Logo src={LogoPerfil} alt="logo" />
			</ContainerLogo>
		</Container>
	);
}
