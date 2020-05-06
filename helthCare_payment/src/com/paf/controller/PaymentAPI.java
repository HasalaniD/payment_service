package com.paf.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.paf.payment.bean.Payment;
import com.paf.payment.model.PaymentDAO;

/**
 * Servlet implementation class PaymentAPI
 */
@WebServlet("/PaymentAPI")
public class PaymentAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PaymentAPI() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
    	
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			
			String[] params = queryString.split("&");
			for(String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
    	return map;
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		
		String appoinmentID = request.getParameter("appointment_id");
		String cardType  = request.getParameter("card_type");
		String cardNo  = request.getParameter("card_no");
		String securityCode = request.getParameter("security_code");
		String nameOnCard = request.getParameter("name_oncard");
		String expirationDate = request.getParameter("expired_date");
		String  email = request.getParameter("email");
		String phoneNo = request.getParameter("phone");
		
		System.out.println(appoinmentID);
		
		Payment payment = new Payment(appoinmentID, cardType, cardNo, securityCode, nameOnCard, expirationDate, email, phoneNo);
		
		String output = PaymentDAO.registerPayment(payment);
		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request);
		
		String appoinmentID = paras.get("appointment_id").toString();
		String  cardType  = paras.get("card_type").toString();
		String cardNo = paras.get("card_no").toString();
		String securityCode  = paras.get("security_code").toString();
		String nameOnCard = paras.get("name_oncard").toString();
		String expirationDate = paras.get("expired_date").toString();
		String email = paras.get("email").toString();
		String phoneNo = paras.get("phone").toString();
		
		Payment payment = new Payment(appoinmentID, cardType, cardNo, securityCode, nameOnCard, expirationDate, email, phoneNo);
		
		String output = PaymentDAO.updatePayment(payment);
		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		
		String appoinmentID = paras.get("appointment_id").toString();
		
		Payment payment = new Payment(appoinmentID);
		
		String output = PaymentDAO.deletePayment(payment);
		
		response.getWriter().write(output);
	}

}
