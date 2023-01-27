import React from 'react';
import './App.css';
import {HomePage} from "./layouts/HomePage/HomePage";
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Route} from "react-router";

export const App = () => {
	return (
		<div>
			<Navbar/>
			<Route path='/'>
				<HomePage/>
			</Route>
			<Route path='/search'>
				<SearchBooksPage/>
			</Route>
			<Footer/>
		</div>
	);
}
