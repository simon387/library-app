import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_live_51IuKnqCW5yRxefpVEKqxOylcqVCmpOw9KjRDXXJe8XTFQmocm1DZnQbdCbELkKW80ZIXYdQDA8n6jCYncFYAZPkB00DbFcs8Se');

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Elements stripe={stripePromise}>
			<App/>
		</Elements>
	</BrowserRouter>
);
