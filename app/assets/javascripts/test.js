
// $('input[value="Sign up"]').on('click', function(e) {
// 	var email = $("#user_email").val();
// 	$.ajax({
// 		url: '/home/test',
// 		data: {email: email},
// 		dataType: 'json',
// 		type: "POST"
// 		});
// 	return false;
// });
// #은 j쿼리, 엘리멘트.get.id 이런거 너무 기니까 줄인거.
$("#user_password").on("focusout", function(e){
	var password = $("#user_password").val();
	var password_alarm = $("#password_alarm");
	if (password.length < 6 && password_alarm.length == 0) {
		$("label[for='user_Password *'").append("<span id='password_alarm'>비밀번호는 6자 이상이어야 합니다.</span>");
		return false;
	}
	else if (password.length >= 6){
		$("#password_alarm").remove();
		return false;
	}
});
