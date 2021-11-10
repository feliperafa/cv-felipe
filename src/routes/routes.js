import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageHome } from '../pages/home/Home';
import { Sobre } from '../pages/sobre/Sobre';
import { Experiencia } from '../pages/experiencia/Experiencia';
import { Contato } from '../pages/contato/Contato';
import { RedeSocial } from '../pages/rede-social/ReseSocial';

export function MainRoutes() {
	return (
		<Switch>
			<Route path="/" exact component={PageHome} />
			<Route path="/sobre" exact component={Sobre} />
			<Route path="/experiencias" exact component={Experiencia} />
			<Route path="/contatos" exact component={Contato} />
			<Route path="/rede-sociais" exact component={RedeSocial} />
		</Switch>
	);
}
