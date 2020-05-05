<%@page import="com.paf.payment.model.PaymentDAO"%>
<jsp:useBean id="payment" class="com.paf.payment.bean.Payment"></jsp:useBean>
<jsp:setProperty property="*" name="payment"/>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%
	String status = PaymentDAO.registerPayment(payment);

	session.setAttribute("payment_registration_status", status);
	
	response.sendRedirect("payment-register.jsp");
%>

</body>
</html>