import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid #00ff7f;
`;

export const ContainerLogo = styled.div`
	width: 100%;
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
