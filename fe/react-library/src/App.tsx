import React from 'react';
import './App.css';
import {HomePage} from "./layouts/HomePage/HomePage";
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch, useHistory} from "react-router";
import {BookCheckOutPage} from "./layouts/BookCheckoutPage/BookCheckOutPage";
import {oktaConfig} from "./lib/oktaConfig";
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
	const customAuthHandler = () => {
		history.push('/');
	}

	const history = useHistory();

	const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
		history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
	}

	return (
		<div className='d-flex flex-column min-vh-100'>
			<Navbar/>
			<div className='flex-grow-1'>
				<Switch>
					<Route path='/' exact>
						<Redirect to={'/home'}/>
					</Route>
					<Route path='/home'>
						<HomePage/>
					</Route>
					<Route path='/search'>
						<SearchBooksPage/>
					</Route>
					<Route path='/checkout/:bookId'>
						<BookCheckOutPage/>
					</Route>
				</Switch>
			</div>
			<Footer/>
		</div>
	);
}
