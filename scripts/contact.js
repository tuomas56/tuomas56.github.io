$(function() {
	$("#sendbutton").click(function(evt) {
		evt.preventDefault()
		$.ajax({
			url: 'https://website-tlaakkonen.rhcloud.com/send-message',
			data: {
				name: encodeURI($("#nameinput").val()),
				message: encodeURI($("#messageinput").val())
			}
		})
	})
})