import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Contato } from '../pages/Contato';
import { Experiencia } from '../pages/Experiencia';
import { PageHome } from '../pages/Home';
import { RedeSocial } from '../pages/ReseSocial';
import { Sobre } from '../pages/Sobre';

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
