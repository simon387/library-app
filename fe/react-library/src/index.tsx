import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51IuKnqCW5yRxefpVmrX6bVFE8vNyv7TQhD8IBjIHJMhZmku37kpd4xmM3SgirAzJ3kDpTgGuaRaCQGvmeXepMQ9b00JgU2VWlv');

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
