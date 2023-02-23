package com.luv2code.springbootlibrary.controller;

import com.luv2code.springbootlibrary.entity.Message;
import com.luv2code.springbootlibrary.service.MessagesService;
import com.luv2code.springbootlibrary.util.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin ( "http://localhost:3000" )
@RestController
@RequestMapping ( "/api/messages" )
public class MessagesController {

	private final MessagesService messagesService;

	@Autowired
	public MessagesController ( MessagesService messagesService ) {
		this.messagesService = messagesService;
	}

	@PostMapping ( "/secure/add/message" )
	public void postMessage ( @RequestHeader ( value = "Authorization" ) String token, @RequestBody Message messageRequest ) {
		String userEmail = ExtractJWT.payloadJWTExtraction ( token, "\"sub\"" );
		messagesService.postMessage ( messageRequest, userEmail );
	}
}
