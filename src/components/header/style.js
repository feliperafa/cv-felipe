import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { css } from 'styled-components';

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

	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
	font-size: 3rem;
	overflow: hidden;
	white-space: nowrap;

	color: #00ff7f;

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

	@media (max-width: 600px) {
		height: 0px;
		visibility: hidden;
		overflow-y: hidden;

		${(props) =>
			props.isHide &&
			css &&
			`
			display:flex;
			position:absolute;
			width:100%;
			top:10rem;
			right:0;
			background: linear-gradient(217deg, rgba(0, 255, 127, 1), rgba(255,0,0,0) 99.71%),
            linear-gradient(127deg, rgba(0, 194, 203, 1), rgba(0,255,0,0) 99.71%),
            linear-gradient(336deg, rgba(17, 17, 17, 1), rgba(0,0,255,0) 100%);
			flex-direction: column;
			height:calc(100vh - 10rem);
			z-index:1000;
			transition:.6s;
			visibility:visible;
			overflow-y: auto;


		`}
	}
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
	@media (max-width: 600px) {
		color: #fff;
		padding: 2rem 0 2rem 0;
		font-size: 2.8rem;

		:hover {
			box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
				0 0 0 2px rgba(0, 255, 127, 1), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
		}
	}
`;

export const ContainerLogo = styled.div`
	display: flex;
`;

export const containerButton = styled.div`
	display: none;

	@media (max-width: 600px) {
		order: 1;
		display: flex;
	}
`;
export const Hamburger = styled.button`
	display: none;

	@media (max-width: 600px) {
		display: flex;
		right: ${(props) => (props.isHide ? '3%' : '-65%')};
		z-index: 1000;
		position: relative;
		width: 100%;
		max-width: 5rem;
		background-color: transparent;
		transition: 0.6s;
		border: none;
		cursor: pointer;

		svg {
			font-size: 4rem;
			color: #00ff7f;
		}
	}
`;
