package com.luv2code.springbootlibrary.responemodels;

import com.luv2code.springbootlibrary.entity.Book;
import lombok.Data;


@Data
public class ShelfCurrentLoansResponse {

	private Book book;

	private int dayLeft;

	public ShelfCurrentLoansResponse ( Book book, int dayLeft ) {
		this.book = book;
		this.dayLeft = dayLeft;
	}
}
