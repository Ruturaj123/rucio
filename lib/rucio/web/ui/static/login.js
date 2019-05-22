validate_credentials = function (username, password) {
	// r.validate_credentials({
	// 	username: username,
	// 	password: password,
	// 	success: function(data) {
	// 		console.log('Success');
	// 		console.log(data);
 //            // window.location.replace('https://' + window.location.host + '/ui/');
	// 	},
	// 	error: function(jqXHR, textStatus, errorThrown) {
 //            console.log('Error');
 //        } 
	// })
	$.post(
		'https://' + window.location.host +'/ui/validate',
		{
			"username": username,
            "password": password
        },
        function (response) {
			console.log(response);
			window.location.replace('https://' + window.location.host + '/ui/');
        },
        'json'
		);
};

$(document).ready(function(){
});