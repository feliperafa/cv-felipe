import React, { useEffect } from 'react';

// import css
import {
	Container,
	ContainerAccordion,
	ContainerCompany,
	NameCompany,
	ImgCompany,
	ContainerContent,
	Description,
} from './style';

// import icones
import Arrow from '../../images/icons/arrow_down.svg';

export function Accordion() {
	useEffect(() => {
		let show = false;
		let click;
		let clickActive;
		let clickSearch;

		if (typeof window !== 'undefined') {
			click = document.querySelector('.container-accordion');
			clickSearch = click.querySelector('.container-company');
			clickActive = click.querySelector('.container-click');

			click.addEventListener('click', () => {
				click.classList.toggle('active', show);
				clickSearch.classList.toggle('active-arrow', show);
				clickActive.classList.toggle('active', show);

				show = !show;
				console.log('fui clicado');
			});
		}
	}, []);

	return (
		<Container>
			<ContainerAccordion className="container-accordion">
				<ContainerCompany>
					<NameCompany>Teste do Accordion</NameCompany>
					<ImgCompany
						className="container-company"
						src={Arrow}
						alt="arrow-down"
					/>
				</ContainerCompany>
				<ContainerContent className="container-click">
					<Description>
						lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
						consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor
						sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem
						ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
						consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor
						sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem
						ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
						consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor
						sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem
						ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet,
						consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor
						sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem
						ipsum dolor sit amet, consectetur
					</Description>
				</ContainerContent>
			</ContainerAccordion>
		</Container>
	);
}
