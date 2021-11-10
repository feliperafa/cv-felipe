import React from 'react';

import {
	Container,
	ContainerPageHome,
	Title,
	PhotoUser,
	ContainerPhotoUser,
	ContainerTitle,
	ContainerGeneralInformation,
	GeneralInformation,
	Information,
	ContainerGeneral,
} from './style';
import { FaCity, FaSort, FaBaby, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import { Data } from './data';
export function PageHome() {
	const data = Data[0];
	console.log(data);
	return (
		<Container>
			{data && (
				<ContainerGeneral>
					<ContainerPageHome>
						<ContainerPhotoUser>
							<PhotoUser src={data.photo} />
						</ContainerPhotoUser>
						<ContainerTitle>
							<Title>{data.userName}</Title>
						</ContainerTitle>
					</ContainerPageHome>
					<ContainerGeneralInformation>
						<GeneralInformation>
							<FaCity />
							<Information>
								Cidade: {data.City} | Estado: {data.state}
							</Information>
						</GeneralInformation>
						<GeneralInformation>
							<FaSort />
							<Information>Idade: {data.age}</Information>
						</GeneralInformation>
						<GeneralInformation>
							<FaBaby />
							<Information>Filhos: {data.sons}</Information>
						</GeneralInformation>
						<GeneralInformation>
							<FaHeart />
							<Information>Est. Civil: {data.maritalStatus}</Information>
						</GeneralInformation>
						<GeneralInformation>
							<FaPhoneAlt />
							<Information>Tel: {data.telephone}</Information>
						</GeneralInformation>
					</ContainerGeneralInformation>
				</ContainerGeneral>
			)}
		</Container>
	);
}
