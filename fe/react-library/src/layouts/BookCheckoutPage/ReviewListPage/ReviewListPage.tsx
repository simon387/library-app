import {useEffect, useState} from "react";
import ReviewModel from "../../../models/ReviewModel";

export const ReviewListPage = () => {

	const [reviews, setReviews] = useState<ReviewModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [reviewsPerPage, setReviewsPerPage] = useState(5);
	const [totalAmountReviews, setTotalAmountReviews] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const bookId = (window.location.pathname).split('/')[2];

	useEffect(() => {
		const fetchBookReviews = async () => {
			const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}&page=${currentPage - 1}&size=${reviewsPerPage}`;
			const responseReviews = await fetch(reviewUrl);
			if (!responseReviews.ok) {
				throw new Error('Something went wrong!');
			}
			const responseJsonReviews = await responseReviews.json();

			const responseData = responseJsonReviews._embedded.reviews;

			setTotalAmountReviews(responseJsonReviews.page.totalElements);
			setTotalPages(responseJsonReviews.page.totalPages);

			const loadedReviews: ReviewModel[] = [];

			for (const key in responseData) {
				loadedReviews.push({
					id: responseData[key].id,
					userEmail: responseData[key].userEmail,
					date: responseData[key].date,
					rating: responseData[key].rating,
					book_id: responseData[key].bookId,
					reviewDescription: responseData[key].reviewDescription,
				});
			}

			setReviews(loadedReviews);
			setIsLoading(false);
		};

		fetchBookReviews().catch((error: any) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, [currentPage]);


	return (

	);
}