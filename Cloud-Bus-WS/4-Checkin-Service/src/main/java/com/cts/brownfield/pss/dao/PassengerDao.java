package com.cts.brownfield.pss.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.brownfield.pss.entity.BookingRecord;
import com.cts.brownfield.pss.entity.Passenger;

public interface PassengerDao extends JpaRepository<Passenger, Integer>{
	
	
	Passenger findByBookingRecord(BookingRecord bookingRecord);

}
