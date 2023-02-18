package com.luv2code.springbootlibrary.responemodels;

import com.luv2code.springbootlibrary.entity.Book;
import lombok.Data;


@Data
public class ShelfCurrentLoansResponse {

	private Book book;

	private int daysLeft;

	public ShelfCurrentLoansResponse ( Book book, int daysLeft ) {
		this.book = book;
		this.daysLeft = daysLeft;
	}
}
