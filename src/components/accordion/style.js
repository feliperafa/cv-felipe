import styled from 'styled-components';
import { color } from '../../style/variavelGlobal';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;

	.active {
		max-height: 100%;
		animation: fade 1s ease-in-out;
	}

	.active-arrow {
		transform: rotate(180deg);
	}
`;

export const ContainerAccordion = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	flex-direction: column;
`;

export const ContainerCompany = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`;

export const NameCompany = styled.h3`
	display: flex;
	font-size: 2.5rem;
	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
`;

export const ImgCompany = styled.img`
	width: 2.5rem;
	transition: transform 0.3s ease-in;
`;

export const ContainerContent = styled.div`
	display: flex;
	width: 100%;
	margin-top: 3rem;
	border-bottom: 1px solid ${color.greenNeon};

	max-height: 0;
	overflow: hidden;
	transition: max-height 0.3s ease;
`;

export const Description = styled.p`
	margin-bottom: 2rem;
	font-family: 'Chakra Petch', sans-serif;
	font-size: 1.6rem;
	line-height: 3rem;

	@keyframes fade {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;
