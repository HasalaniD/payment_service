<%@page import="com.paf.payment.model.PaymentDAO"%>
<%@page import="com.paf.payment.bean.Payment"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%
	if(request.getParameter("appoinmentID") != null){
	String appoinmentID = request.getParameter("appoinmentID");
	String cardType = request.getParameter("cardType");
	String cardNo = request.getParameter("cardNo");
	String securityCode = request.getParameter("securityCode");
	String nameOnCard = request.getParameter("nameOnCard");
	String expirationDate = request.getParameter("expirationDate");
	String email = request.getParameter("email");
	String phoneNo = request.getParameter("phoneNo");
	
	Payment p = new Payment(appoinmentID, cardType, cardNo, securityCode, nameOnCard, expirationDate, email, phoneNo);
	
	String status = PaymentDAO.registerPayment(p);
	
	session.setAttribute("payment_registration_status", status);
	
	}
%>    
       
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/payment.js"></script>
</head>
<body>
	<div class="container">
        <fieldset>
            <h3>
                <span>Payment</span>
            </h3>

            <form id="registration-form" action="payment_register.jsp">
                <div class="form-group row">
                    <label for="appoinmentID" class="col-sm-2 col-form-label">Appointment ID<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="appoinmentID" name="appoinmentID" class="form-control">
                         <span class="error_message" id="appoinmentID_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                		<label for="cardType" class="col-sm-2 col-form-label">Card Type<span class="required-sign">(*)</span></label>
                 		<div class="col-sm-10">
                        <select id="cardType" name ="cardType">
  							<option value="visa">Visa</option>
  							<option value="master">Master</option>
						</select>
						<span class="error_message" id="Type_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="cardNo" class="col-sm-2 col-form-label">Card No<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="cardNo" name="cardNo" class="form-control">
                        <span class="error_message" id="cardNo_error"></span>
					</div>
                </div>
                <div class="form-group row">
                    <label for="securityCode" class="col-sm-2 col-form-label">Security Code<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="securityCode"  name="securityCode"  class="form-control">
                        <span class="error_message" id="securityCode_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="nameOnCard" class="col-sm-2 col-form-label">Name On Card<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="nameOnCard" name="nameOnCard" class="form-control">
                        <span class="error_message" id="nameOnCard_error"></span>
                    </div>
                    </div>
                     <div class="form-group row">
                    <label for="expirationDate" class="col-sm-2 col-form-label">Expiration Date<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="expirationDate" name="expirationDate" class="form-control">
                        <span class="error_message" id="expirationdate_error"></span>
                    </div>
                    </div>
                     <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="email" id="email" name="email" class="form-control">
                        <span class="error_message" id="email_error"></span>
                    </div>
                    </div>
                     <div class="form-group row">
                    <label for="phoneNo" class="col-sm-2 col-form-label">Phone No<span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="phoneNo" name="phoneNo" class="form-control">
                        <span class="error_message" id="phoneNo_error"></span>
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" id="submit" class="btn btn-success">Pay</button>
                    </div>
                </div>
            </form>
            
            <div class="alert alert-success">
            	<%
            		if(session.getAttribute("payment_registration_status") != null) {
            			out.print(session.getAttribute("payment_registration_status"));
            		}
            	%>
            </div>
             
        </fieldset>
    </div>
</body>
</html>