import styled from 'styled-components';
import { color } from '../../style/variavelGlobal';

export const Container = styled.div`
	display: flex;
	margin-top: 3rem;
	margin-right: 2rem;
	margin-left: 2rem;

	flex-direction: column;
	width: 100%;
	max-width: 90%;
`;
export const ContainerGeneral = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const ContainerPageHome = styled.div`
	display: flex;
	width: 100%;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const ContainerTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Title = styled.h2`
	display: flex;
	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
	font-size: 3rem;
`;

export const ContainerPhotoUser = styled.div`
	display: flex;

	@media (max-width: 600px) {
		order: 1;
		margin-top: 3rem;
	}
`;

export const PhotoUser = styled.img`
	border-radius: 100%;
	border: 1px solid ${color.greenNeon};
	width: 10rem;

	@media (max-width: 600px) {
		width: 8rem;
	}
	:hover {
		border: 1px solid #fff;
	}
`;

export const ContainerGeneralInformation = styled.div`
	display: flex;
	padding-top: 5rem;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const GeneralInformation = styled.div`
	display: flex;
	font-size: 2rem;
	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
	margin-bottom: 2rem;

	svg {
		margin-right: 2rem;
	}
`;

export const Information = styled.p`
	display: flex;
`;

export const ContainerAreaDescription = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
`;
export const AreaDescriptionTitle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3rem;
	font-size: 3rem;
	font-family: 'Chakra Petch', sans-serif;
	font-weight: 300;
`;
export const AreaDescription = styled.p`
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Chakra Petch', sans-serif;
	font-size: 2rem;
	line-height: 3rem;

	:first-of-type {
		margin-bottom: 2rem;
	}
`;
