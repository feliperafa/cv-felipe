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
export const LinkLogo = styled(Link)`
	display: flex;

	align-items: center;
	text-decoration: none;
`;

export const LogoName = styled.h3`
	display: flex;
	margin-left: 3rem;

	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
	font-size: 3rem;
	overflow: hidden;
	white-space: nowrap;

	color: #00ff7f;

	/* :before {
		transform: scaleX(0);
		transform-origin: bottom right;
	}
	:before {
		color: #fff;
		transition: transform 0.3s ease;
	} */
	:hover {
		color: #fff;
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #00ff7f;
		}
	}

	animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
`;

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
	font-weight: 300;
	font-family: 'Chakra Petch', sans-serif;
	text-decoration: none;
	margin-left: 1rem;
	color: #00ff7f;
	border-radius: 0.4rem;

	:hover {
		box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
			0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
	}
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

	:hover {
		border: 2px solid #fff;
	}
`;
