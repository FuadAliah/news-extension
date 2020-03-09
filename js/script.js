$(document).ready(function () {
    $(".tab").click(function () {
        $(".tab").removeClass('active');
        $(this).addClass('active');
    });
    $(".settings a").on({
        mouseenter: function () {
            $('#sett-popup').fadeIn('hidden');
        },
        mouseleave: function () {
            $('#sett-popup').fadeOut('hidden');
        },
    });
    $(".down a").on({
        mouseenter: function () {
            $('#mode-popup').fadeIn('hidden');
        },
        mouseleave: function () {
            $('#mode-popup').fadeOut('hidden');
        },
    });
    $("#light_mode").click(function () {
        if ($('#mode_img').attr('src') == './imgs/dark.svg') {
            $('#mode_img').attr('src', './imgs/light.svg');
            $('link[href="./css/light.css"]').attr('href', './css/dark.css');
            $('#mode-popup').text('Light Mode')
        } else {
            $('#mode_img').attr('src', './imgs/dark.svg');
            $('link[href="./css/dark.css"]').attr('href', './css/light.css');
            $('#mode-popup').text('Dark Mode')
        }
    })
    $.ajax({
        url: '../data.json',
        dataType: 'JSON',
        success: function (response) {
            var getData = '';
            for (i = 0; i < response.length; i++) {
                getData =
                    '<a href="#" class="card"><img src=' + response[i].image + '><div class="card-content"><div class="left"><div class="card-title">' + response[i].title + '</div><div class="card-info">' + response[i].description + '</div></div><div class="right"><img src="./imgs/views.svg"><span>' + response[i].number + '</span></div></div></a>';
                $("#wrapper").append(getData)
            }
        },
        error: function (err) {
            console.log(err.statusText);
        }
    })
    $.ajax({
        url: '../news-agent.json',
        dataType: 'JSON',
        success: function (response) {
            var getData = '';
            for (i = 0; i < response.length; i++) {
                getData = ` <li><a href="${response[i].website}"><div class="agent"><img src="${response[i].logo}" alt=""></div></a></li>`;
                $("#news-agents").append(getData)
            }
        },
        error: function (err) {
            console.log(err.statusText);
        }
    })
    // var myRequest = new XMLHttpRequest();
    // myRequest.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         var getData = JSON.parse(this.responseText)
    //         var responseData = [];
    //         for (i = 0; i < getData.length; i++) {
    //             responseData += responseData + getData[i];
    //         }
    //         document.getElementById('wrapper').innerHTML = responseData;
    //     }
    // };
    // myRequest.open('GET', '../data.json', true);
    // myRequest.send();
});