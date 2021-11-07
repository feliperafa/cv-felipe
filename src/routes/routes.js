import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Contato } from '../pages/Contato';
import { Experiencia } from '../pages/Experiencia';
import { PageHome } from '../pages/Home';
import { RedeSocial } from '../pages/ReseSocial';
import { Sobre } from '../pages/Sobre';

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<PageHome />} />
			<Route path="/sobre" element={<Sobre />} />
			<Route path="/experiencia" element={<Experiencia />} />
			<Route path="/contato" element={<Contato />} />
			<Route path="/rede-social" element={<RedeSocial />} />
		</Routes>
	);
}
