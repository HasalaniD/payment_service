package com.paf.payment.service;

import com.paf.payment.bean.Payment;
import com.paf.payment.model.PaymentDAO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/payment")
public class PaymentService {
	
	@POST
	@Path("/payment_registration")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String registerPayment(
			@FormParam("appoinmentID") String appoinmentID,
			@FormParam("cardType") String cardType,
			@FormParam("cardNo") String cardNo,
			@FormParam("securityCode") String securityCode,
			@FormParam("nameOnCard") String nameOnCard,
			@FormParam("expirationDate") String expirationDate,
			@FormParam("email") String email,
			@FormParam("phoneNo") String phoneNo){
		
		String status = null;
				
		Payment d = new Payment(appoinmentID, cardType, securityCode, nameOnCard, email, expirationDate, email, phoneNo);
		
		status = PaymentDAO.registerPayment(d);
		
		return status;
	}
	
	@PUT
	@Path("/payment_update")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String updatePatient(
			
			@FormParam("appoinmentID") String appoinmentID,
			@FormParam("cardType") String cardType,
			@FormParam("cardNo") String cardNo,
			@FormParam("securityCode") String securityCode,
			@FormParam("nameOnCard") String nameOnCard,
			@FormParam("expirationDate") String expirationDate,
			@FormParam("email") String email,
			@FormParam("phoneNo") String phoneNo) {
			
		
		Payment p = new Payment(appoinmentID, cardType, cardNo, securityCode, nameOnCard, expirationDate, email, phoneNo);
		
		String output = PaymentDAO.updatePayment(p);
		
		return output;
	}
	
	@GET
	@Path("/payment_list")
	@Produces(MediaType.TEXT_HTML)
	public String getPaymentList() {
		
		return PaymentDAO.paymentList();
		
	}
	
	@DELETE
	@Path("/delete_payment")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String deletePayment(@FormParam("appoinmentID") String appoinmentID) {
		
		Payment p = new Payment();
		
		p.setAppoinmentID(appoinmentID);
		
		String output = PaymentDAO.deletePayment(p);
		
		return output;
	}
}
