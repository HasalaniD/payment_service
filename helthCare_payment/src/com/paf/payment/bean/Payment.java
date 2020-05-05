package com.paf.payment.bean;

public class Payment {
	
	private String appoinmentID;
	private String cardType;
	private String cardNo;
	private String securityCode;
	private String nameOnCard;
	private String expirationDate;
	private String email;
	private String phoneNo;
		
	public Payment() {
		
	}
	public Payment(String appoinmentID, String cardType, String cardNo, String securityCode, String nameOnCard,
			String expirationDate, String email, String phoneNo) {
		this.appoinmentID = appoinmentID;
		this.cardType = cardType;
		this.cardNo = cardNo;
		this.securityCode = securityCode;
		this.nameOnCard = nameOnCard;
		this.expirationDate = expirationDate;
		this.email = email;
		this.phoneNo = phoneNo;
		}
	
	public String getAppoinmentID() {
		return appoinmentID;
	}
	public void setAppoinmentID(String appoinmentID) {
		this.appoinmentID = appoinmentID;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public String getCardNo() {
		return cardNo;
	}
	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}
	public String getSecurityCode() {
		return securityCode;
	}
	public void setSecurityCode(String securityCode) {
		this.securityCode = securityCode;
	}
	public String getNameOnCard() {
		return nameOnCard;
	}
	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}
	public String getExpirationDate() {
		return expirationDate;
	}
	public void setExpirationDate(String expirationDate) {
		this.expirationDate = expirationDate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	

	
}
