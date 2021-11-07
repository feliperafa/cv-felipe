import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	width: 100%;
	height: 10rem;
	border-bottom: 1px solid #00ff7f;
	align-items: center;
	flex-direction: row;
`;
export const LinkLogo = styled(Link)``;

export const ContainerContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0 1.25rem 0 1.25rem;
`;

export const ContainerMenu = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const MenuTitle = styled(Link)`
	font-size: 1.8rem;
	line-height: 2.4rem;
	font-weight: 400;
	font-family: Roboto;

	margin-left: 1rem;
`;

export const ContainerLogo = styled.div`
	display: flex;
`;

export const Logo = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	transition: 0.3ms;
	border: 1px solid #00ff7f;

	@keyframes on-off {
		from {
			border: 1px solid #00ff7f;
		}
		12% {
			border: 2px solid #00ff7f;
		}
		14% {
			border: 1px solid #00ff7f;
		}
		20% {
			border: 2px solid #00ff7f;
		}
		22% {
			border: 1px solid #00ff7f;
		}
		35% {
			border: 2px solid #00ff7f;
		}
		to {
			border: 1px solid #00ff7f;
		}
	}

	animation: on-off 5s infinite;
`;
