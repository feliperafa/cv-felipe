import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { css } from 'styled-components';
import { color } from '../../style/variavelGlobal';

export const Container = styled.header`
	display: flex;
	width: 100%;
	height: 10rem;
	border-bottom: 1px solid ${color.greenNeon};
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

	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
	font-size: 3rem;
	overflow: hidden;
	white-space: nowrap;

	color: ${color.greenNeon};

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
			border-color: ${color.greenNeon};
		}
	}

	animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
`;

export const ContainerContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0 1.25rem 0 1.25rem;

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		align-items: center;
	}

	@media (max-width: 600px) {
		.menu-section {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.menu-toggle {
			width: 4rem;
			height: 3rem;
			margin-right: 2rem;
		}

		.one,
		.two,
		.three {
			background-color: ${color.greenNeon};
			height: 0.5rem;
			width: 100%;
			margin: 0.6rem auto;

			transition-duration: 0.3s;
		}

		nav {
			display: none;
		}

		.menu-section {
			align-items: unset;
		}

		.menu-section.on {
			position: absolute;
			top: 0;
			left: 0;

			width: 100vw;
			height: 100vh;

			background-color: ${color.siteBackGroud};
			z-index: 10;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		.menu-section.on nav {
			display: block;
		}

		.menu-section.on .menu-toggle {
			position: absolute;
			right: 2.5rem;
			top: 1.5rem;
		}

		.menu-section.on .menu-toggle .one {
			transform: rotate(45deg) translate(7px, 5px);
		}

		.menu-section.on .menu-toggle .two {
			opacity: 0;
		}

		.menu-section.on .menu-toggle .three {
			transform: rotate(-45deg) translate(8px, -5px);
		}

		.menu-section.on nav {
			text-align: center;
			display: block;
			width: 100%;
			position: absolute;
			top: 8rem;
		}
		.menu-section.on nav a {
			transition-duration: 0.5s;
			font-size: 3rem;
			display: block;
			line-height: 8rem;
		}
	}
`;

export const ContainerMenu = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const MenuTitle = styled(Link)`
	display: flex;
	font-size: 2rem;
	line-height: 2.4rem;
	font-weight: 300;
	font-family: 'Chakra Petch', sans-serif;
	text-decoration: none;
	margin-left: 1rem;
	color: ${color.greenNeon};
	border-radius: 0.4rem;

	:hover {
		box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
			0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
`;
