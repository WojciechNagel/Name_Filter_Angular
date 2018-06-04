// JavaScript source code

$(document).ready(function () {             /* <--- PAMIETAJ O TYM! */

    $('#imielabel').click(function () {

        $('#podpimie').text('Klikn¹³eœ etykietê imiê').css('color', 'red');

    });

    $('#imie').keyup(function () {
   
        if( $(this).val().length > 0)
        $.getJSON('service.php', { "imie": $(this).val() }, function (data) {
            var txt = ' ';
            for (i = 0; i < data.length; i++)
                txt = txt + '<span>' + data[i] + '</span> ';
            $('#podpimie').html(txt).hide().slideDown('slow');
            $('#podpimie span').click(function () { $('#imie').val($(this).text()); })
                .css('cursor', 'pointer')
                .hover( function () { $(this).css('background', 'lightyellow') },
                        function () { $(this).css('background', '') });

            });
        else
            $('podpimie').html('');

    });
    
    $('#nazw').keyup(function () {

        if ($(this).val().length > 0)
            $.getJSON('service.php', { "nazw": $(this).val() }, function (data) {
                var txt = ' ';
                for (i = 0; i < data.length; i++)
                    txt = txt + '<span>' + data[i] + '</span> ';
                $('#podpnazw').html(txt).hide().slideDown('fast');
                $('#podpnazw span').click(function () { $('#nazw').val($(this).text()); })
                    .css('cursor', 'pointer')
                    .hover(function () { $(this).css('background', 'lightyellow') },
                    function () { $(this).css('background', '') });

            });
        else
            $('podpnazw').html('');
    });

    $('#wyslij').click(function () {
        if ($('#imie').val().length < 2)
        {
            alert("Musisz podaæ imiê");
            $('#imie').focus();
        }
    })
    

});