<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<jsp:useBean id="payment" class="com.paf.payment.bean.Payment"></jsp:useBean>
<jsp:setProperty property="*" name="payment"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%
	response.sendRedirect("payment-register.jsp");
%>

</body>
</html>