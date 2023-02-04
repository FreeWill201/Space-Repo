// when user clicks date text input, show date picker
$( function() {
    $( "#datepicker" ).datepicker({
         dateFormat: 'yy-mm-dd' 
        })
        .datepicker("setDate", new Date())     
} );

