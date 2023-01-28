package com.luv2code.springbootlibrary.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table ( name = "Review" )
@Data
public class Review {

	@Id
	@GeneratedValue ( strategy = GenerationType.IDENTITY )
	@Column ( name = "id" )
	private Long id;

	@Column ( name = "user_email" )
	private String userEmail;

	@Column ( name = "date" )
	@CreationTimestamp
	private Date date;

	@Column ( name = "rating" )
	private double rating;

	@Column ( name = "book_id" )
	private Long bookId;

	@Column ( name = "review_description" )
	private String reviewDescription;
}
