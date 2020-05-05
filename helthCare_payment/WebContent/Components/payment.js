$(document).ready(function()
{ 
//hide area of error messages
	$("#appoinmentID_error").hide();
	$("#Type_error").hide(); 
	$("#cardNo_error").hide(); 
	$("#securityCode_error").hide(); 
	$("#nameOnCard_error").hide(); 
	$("#expirationdate_error").hide(); 
	$("#email_error").hide(); 
	$("#phoneNo_error").hide();
	
//check the validation ID
	$("#appoinmentID_error").focusout(function(){
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
	
	
	$(document).on("click", "#signin-button", function(event) {

		let idStatus = idRequired();
		let typeStatus = typeRequired();
		let cnoStatus = cnoRequired();
		let scodeStatus = scodeRequired();
		let nameStatus = nameRequired();
		let edateStatus = edateRequired();
		let emailStatus = emailRequired();
		let pnoStatus = pnoRequired();
	
		$("#registration-form").submit(function() {
			if (idStatus == false || typeStatus == false || cnoStatus == false || scodeStatus == false || nameStatus == false || edateStatus == false || emailStatus == false || pnoStatus == false)
				{
				return false;
				}
			else if(vEmail == false)
				{
			else {
				return true;
			}
				});
			
				});
		});

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

//Appoinment ID is required field
function aIDRequired() {
	if ($("#appoinmentID").val().trim() == "") {
		$("#appoinmentID_error").html("This field is required");
		$("#appoinmentID_error").show();
		return false;
	}
}

//Card Type is required field
function cTypeRequired() {
	if ($("#card_Type").val().trim() == "") {
		$("#Type_error").html("This field is required");
		$("#Type_error").show();
		return false;
	}
}

//Card Number is required field
function cNoRequired() {
	if ($("#card_no").val().trim() == "") {
		$("#cardNo_error").html("This field is required");
		$("#cardNo_error").show();
		return false;
	}
}

//Security Code is required field
function sCodeRequired() {
	if ($("#security_code").val().trim() == "") {
		$("#securityCode_error").html("This field is required");
		$("#securityCode_error").show();
		return false;
	}
}

//Name on Card is required field
function nameOnCardRequired() {
	if ($("#name_on_card").val().trim() == "") {
		$("#nameOnCard_error").html("This field is required");
		$("#nameOnCard_error").show();
		return false;
	}
}

//Expiration Date is required field
function exDateRequired() {
	if ($("#ex_date").val().trim() == "") {
		$("#expirationdate_error").html("This field is required");
		$("#expirationdate_error").show();
		return false;
	}
}

//Email is required field
function emailRequired() {
	if ($("email"").val().trim() == "") {
		$("#email_error").html("This field is required");
		$("#email_error").show();
		return false;
	}
}

//Phone Number is required field
function pNoRequired() {
	if ($("#phone_no").val().trim() == "") {
		$("#phoneNo_error").html("This field is required");
		$("#phoneNo_error").show();
		return false;
	}
}

	
	
	
	
	});