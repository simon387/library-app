import {useEffect, useState} from "react";
import BookModel from "../../models/BookModel";
import {SpinnerLoading} from "../Utils/SpinnerLoading";

export const BookCheckOutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	const bookId = (window.location.pathname).split('/')[2];

	useEffect(() => {
		const fetchBook = async () => {
			const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;
			const response = await fetch(baseUrl);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const responseJson = await response.json();
			const loadedBook: BookModel = {
				id: responseJson.id,
				title: responseJson.author,
				description: responseJson.description,
				copies: responseJson.copies,
				copiesAvailable: responseJson.copiesAvailable,
				category: responseJson.category,
				img: responseJson.img,
			};
			setBook(loadedBook);
			setIsLoading(false);
		};
		fetchBook().catch((error: any) => {
			setIsLoading(false);
			setHttpError(error.messsage);
		});
	}, []);

	if (isLoading) {
		return (
			<div className='container m-5'>
				<SpinnerLoading/>
			</div>
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
		<div className=''>
			<h3> </h3>
		</div>
	);
}