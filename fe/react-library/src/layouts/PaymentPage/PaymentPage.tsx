import {useOktaAuth} from "@okta/okta-react";
import {useEffect, useState} from "react";
import {SpinnerLoading} from "../Utils/SpinnerLoading";

export const PaymentPage = () => {

	const {authState} = useOktaAuth();
	const [httpError, setHttpError] = useState(false);
	const [submitDisabled, setSubmitDisabled] = useState(false);
	const [fees, setFees] = useState(0);
	const [loadingFees, setLoadingFees] = useState(true);

	useEffect(() => {
		const fetchFees = async () => {
			if (authState && authState.isAuthenticated) {
				const url = `${process.env.REACT_APP_API}/payments/search/findByUserEmail?userEmail=${authState.accessToken?.claims.sub}`;
				const requestOptions = {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${authState.accessToken?.accessToken}`,
						'Content-Type': 'application/json'
					}
				};
				const paymentResponse = await fetch(url, requestOptions);
				if (!paymentResponse.ok) {
					throw new Error('Something went wrong!');
				}
				const paymentResponseJson = await paymentResponse.json();
				setFees(paymentResponseJson.amount);
				setLoadingFees(false);
			}
		}
		fetchFees().catch((error: any) => {
			setLoadingFees(false);
			setHttpError(error.message);
		});
	}, [authState]);

	if (loadingFees) {
		return (
			<SpinnerLoading/>
		);
	}

	if (httpError) {
		return (
			<div className='container m-5'>
				<p>{httpError}</p>
			</div>
		);
	}

	return (
		<>
		</>
	);
}
