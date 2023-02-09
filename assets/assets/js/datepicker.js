// when user clicks date text input, show date picker
$( function() {
    $( "#datepicker" ).datepicker({
         dateFormat: 'yy-mm-dd' ,
         maxDate: 0
        })
        .datepicker("setDate", new Date())  
} );

