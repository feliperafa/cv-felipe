import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageHome } from '../pages/Home';

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<PageHome />} />
			{/* <Route path="/" exact component={PageHome} /> */}
		</Routes>
	);
}
