$(document).ready(function()
{ 
//hide area of error messages
	$("#appointmentID_error").hide();
	$("#Type_error").hide(); 
	$("#cardNo_error").hide(); 
	$("#securityCode_error").hide(); 
	$("#nameOnCard_error").hide(); 
	$("#expirationdate_error").hide(); 
	$("#email_error").hide(); 
	$("#phoneNo_error").hide();
	
//check the validation ID
	$("#appointmentID_error").focusout(function(){
		appoinmentID();
	});
	
//check the validation Card Type
	$("#Type_error").focusout(function(){
		cardType();
	});
	
//check the validation Card No.
	$("#cardNo_error").focusout(function(){
		cardNo();
	});
	
//check the validation Security Code
	$("#securityCode_error").focusout(function(){
		securityCode();
	});
	
//check the validation Name on Card
	$("#nameOnCard_error").focusout(function(){
		nameOnCard();
	});
	
//check the validation Expiration Date
	$("#expirationdate_error").focusout(function(){
		expirationDate();
	});
	
//check the validation Email
	$("#email_error").focusout(function(){
		email();
	});
	
//check the validation Phone No.
	$("#phoneNo_error").focusout(function(){
		phoneNo();
	});
	
// variables for validations
	let vEmail = true;
	
	
// check email is valid or not
	$("#email").focusout(function() {
		vEmail = checkEmail();
	});
});
	
	$(document).on("click", "#pay-button", function(event) {
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();


		var status = validateItemForm();

		if (status != true) {
			$("#alertError").text(status);
			$("#alertError").show();
			return;
		}

		// If valid------------------------
		var method = ($("#hidField").val() == "save") ? "POST" : "PUT";

		$.ajax({
			url : "PaymentAPI",
			type : method,
			data : $("#registration-form").serialize(),
			dataType : "text",
			complete : function(response, status) {
				registerComplete(response.responseText, status);
			}
		});
	});
	
	$(document).on(
			"click",
			".btnUpdate",
			function(event) {
				$("#hidField").val(
						$(this).closest("tr").find('#hidFieldUpdate').val());
				$("#appoinmentID").val($(this).closest("tr").find('td:eq(0)').text());
				// $("#cardType").val($(this).closest("tr").find('td:eq(1)').text());
				$("#cardNo").val($(this).closest("tr").find('td:eq(2)').text());
				$("#securityCode").val($(this).closest("tr").find('td:eq(3)').text());
				$("#nameOnCard").val($(this).closest("tr").find('td:eq(4)').text());
				$("#expirationDate").val($(this).closest("tr").find('td:eq(5)').text());
				$("#email").val($(this).closest("tr").find('td:eq(6)').text());
				$("#phoneNo").val($(this).closest("tr").find('td:eq(7)').text());
			});
	
	function registerComplete(response, status)
	{
		if (status == "success")
		{
			var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			} 
			else if (resultSet.status.trim() == "error")
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} 
		else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		} 
		else
		{
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show();
		}
		
		$("#hidField").val("save");
		$("#registration-form")[0].reset();
	}
	
	$(document).on("click", ".btnRemove", function(event)
			{
				$.ajax(
				{
					url : "PaymentAPI",
					type : "DELETE",
					data : "appoinmentID=" + $(this).data("appoinmentID"),
					dataType : "text",
					complete : function(response, status)
					{
						deleteComplete(response.responseText, status);
					}
				});
			});

	// Delete
	function deleteComplete (response, status)
	{
		if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			} 
			else if (resultSet.status.trim() == "error")
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} 
		else if (status == "error")
		{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		} 
		else
		{
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();
		}
	}


	// Validation
	function validateItemForm()
	{
		// Appointment ID is required
		if ($("#appoinmentID").val().trim() == "")
		{
			return "Insert Appointment ID";
		}
		
		// card Type is required
		if ($("#cardType").val().trim() == "")
		{
			return "Insert Card Type";
		}
		
		// card No is required
		if ($("#cardNo").val().trim() == "")
		{
			return "Insert Card No";
		}
		
		// security Code is required
		if ($("#securityCode").val().trim() == "")
		{
			return "Insert Security Code";
		}
		
		// name On Card is required
		if ($("#nameOnCard").val().trim() == "")
		{
			return "Insert Name On Card";
		}
				
		// expiration Date is required
		if ($("#expirationDate").val().trim() == "")
		{
			return "Insert Expiration Date";
		}
		
		// email is required
		if ($("#email").val().trim() == "")
		{
			return "Insert Email";
		}
		
		// phone No is required
		if ($("#phoneNo").val().trim() == "")
		{
			return "Insert Phone No";
		}
		
		return true;
	}	

//email validation
function checkEmail() {
	let email = $("#email").val().trim();
	let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (regex.test(email)) {
		$("#email_error").hide();
		return true;
	} else {
		$("#email_error").html("Enter valid email");
		$("#email_error").show();
		return false;
	}
}

//appointment ID is required field
function aIDRequired() {
	if ($("#appointmentID").val().trim() == "") {
		$("#appointmentID_error").html("This field is required");
		$("#appointmentID_error").show();
		return false;
	}
}

//card Type is required field
function cTypeRequired() {
	if ($("#card_Type").val().trim() == "") {
		$("#Type_error").html("This field is required");
		$("#Type_error").show();
		return false;
	}
}

//card Number is required field
function cNoRequired() {
	if ($("#card_no").val().trim() == "") {
		$("#cardNo_error").html("This field is required");
		$("#cardNo_error").show();
		return false;
	}
}

//security Code is required field
function sCodeRequired() {
	if ($("#security_code").val().trim() == "") {
		$("#securityCode_error").html("This field is required");
		$("#securityCode_error").show();
		return false;
	}
}

//name on Card is required field
function nameOnCardRequired() {
	if ($("#name_on_card").val().trim() == "") {
		$("#nameOnCard_error").html("This field is required");
		$("#nameOnCard_error").show();
		return false;
	}
}

//expiration Date is required field
function exDateRequired() {
	if ($("#ex_date").val().trim() == "") {
		$("#expirationdate_error").html("This field is required");
		$("#expirationdate_error").show();
		return false;
	}
}

//email is required field
function emailRequired() {
	if ($("email").val().trim() == "") {
		$("#email_error").html("This field is required");
		$("#email_error").show();
		return false;
	}
}

//phone Number is required field
function pNoRequired() {
	if ($("#phone_no").val().trim() == "") {
		$("#phoneNo_error").html("This field is required");
		$("#phoneNo_error").show();
		return false;
	}
}