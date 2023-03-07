import {useEffect, useState} from "react";
import BookModel from "../../../models/BookModel";
import {SpinnerLoading} from "../../Utils/SpinnerLoading";

export const ChangeQuantityOfBooks = () => {

	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(5);
	const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchBooks = async () => {
			const url: string = `$http://localhost:8080/api/books?page=${currentPage - 1}&size=${booksPerPage}`;

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const responseJson = await response.json();

			const responseData = responseJson._embedded.books;

			setTotalAmountOfBooks(responseJson.page.totalElements);
			setTotalPages(responseJson.page.totalPages);

			const loadedBooks: BookModel[] = [];

			for (const key in responseData) {
				loadedBooks.push({
					id: responseData[key].id,
					title: responseData[key].title,
					author: responseData[key].author,
					description: responseData[key].description,
					copies: responseData[key].copies,
					copiesAvailable: responseData[key].copiesAvailable,
					category: responseData[key].category,
					img: responseData[key].img,
				});
			}

			setBooks(loadedBooks);
			setIsLoading(false);
		};
		fetchBooks().catch((error: any) => {
			setIsLoading(false);
			setHttpError(error.messsage);
		});
	}, [currentPage]);

	const indexOfLastBook: number = currentPage * booksPerPage;
	const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
	let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage : totalAmountOfBooks;
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	if (isLoading) {
		return (
			<SpinnerLoading/>
		);
	}

	if (httpError) {
		return (
			<div className='container m-5'>
				<p>{httpError}</p>
			</div>
		)
	}

	return (
		<>

		</>
	);
}
