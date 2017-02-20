$(function() {
    'use strict';

    $('button').on('click', function() {
        $('.results').empty();
        getAjax();
    });

    $('.search').keypress(function(e) {
        if (e.which == 13) {
            $('.results').empty();
            getAjax();
        }
    });


    function getAjax() {
        $.ajax({
            url: 'https://pixabay.com/api/?key=4567175-1fcb090e1f6a018a904e3d3b2&q=' + $('input').val(),
            method: 'GET',
            dataType: 'jsonp',
            success: function(result) {
                onComplete(result);
            },
            error: function() {
                console.log('error');
            }
        })
    };

    function onComplete(result) {
        for (var i = 0; i < 16; i++) {
            var hit = result.hits[i];
            $('.results').append('<a class="image" href="' + hit.pageURL + '"> <img target="_blank" src="' + hit.previewURL + '"></img></a>');
        }
    }

});
