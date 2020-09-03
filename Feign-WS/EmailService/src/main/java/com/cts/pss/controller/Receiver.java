package com.cts.pss.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Map;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;


@Controller
@RefreshScope
public class Receiver {
	

	@Autowired
    private JavaMailSender javaMailSender;
	
	
	 @Value("${listOfEmailAddress}")
     private String[] listOfEmailAddress;

	@Bean
	Queue emailQ() {
		return new Queue("EmailQ", false);
	}
	
	@RabbitListener(queues = "EmailQ")
    public void processMessage(Map<String,Object> passenger) {
		
		System.out.println(">>>>> Sending mails to "+listOfEmailAddress);
		
        System.out.println("===========> Email-Service:: ****====**** <===========");
		System.out.println(passenger);
		System.out.println("===========> Email-Service:: ****====**** <===========");
       

        SimpleMailMessage msg = new SimpleMailMessage();
       // msg.setTo("richardsforu@gmail.com", "ctsgit@gmail.com");
       msg.setTo(listOfEmailAddress);
       
        String flightNumber=(String)passenger.get("FLIGHT_NUMBER");
        LocalDate flightDate=(LocalDate)passenger.get("DATE");
        String passengerName=(String)passenger.get("NAME");
        LocalTime time=(LocalTime)passenger.get("TIME");
        
        
        msg.setSubject("Flight Booking forfirmation");
        msg.setText("Dear "+passengerName+" You Flight Number "+flightNumber+" is Confirmed on "+flightDate +" at "+time);

        javaMailSender.send(msg);
		// Logic to send email ...
		
		// searchService.updateInventory((String)fare.get("FLIGHT_NUMBER"),(LocalDate)fare.get("FLIGHT_DATE"),(int)fare.get("NEW_INVENTORY"));
       //call repository and update the fare for the given flight
    }	
}
