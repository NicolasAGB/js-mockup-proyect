$(document).ready(function () {

    //slider
    if (window.location.href.indexOf('index') > -1) {

        $('.galery').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,

        });
    }


    //post


    if (window.location.href.indexOf('index') > -1) {




        var posts = [
            {
                title: "Tittle 1",
                date: 'Published on:' + moment().format("MMM Do YY"),
                content: 'Curabitur vitae justo posuere, auctor nulla et, dignissim mauris. Suspendisse purus mi, tristique sit amet sagittis eu, tempus id mi'
            },
            {
                title: "Tittle 2",
                date: 'Published on:' + moment().format("MMM Do YY"),
                content: 'Aliquam tristique lorem eget commodo eleifend. Cras lacinia, magna sed aliquet bibendum, ipsum lorem commodo ante, nec eleifend odio erat ut diam'
            },
            {
                title: "Tittle 3",
                date: 'Published on:' + moment().format("MMM Do YY"),
                content: 'Praesent nec volutpat ex. Maecenas non orci at orci dictum efficitur sed quis turpis. Mauris elementum ex at turpis maximus, at posuere tortor volutpat'
            },
            {
                title: "Tittle 4",
                date: 'Published on:' + moment().format("MMM Do YY"),
                content: 'Nam aliquam et nisl at egestas. Nam id tristique diam. Integer eleifend mi a feugiat dictum. Integer dui nisl, commodo in ultricies eu, facilisis id diam.'
            },
            {
                title: "Tittle 5",
                date: 'Published on:' + moment().format("MMM Do YY"),
                content: 'Phasellus vulputate mauris a urna ultricies dapibus. Donec consequat eget elit in volutpat. Praesent dolor libero, mattis vel eros quis, posuere iaculis magna'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
                 <article class="post"> 
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
                `;



            $("#posts").append(post);
        });
    }


    //theme select
    var theme = $("#theme")

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")

    });
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")

    });
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")

    });

    //scroll up
    $('.up').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login mockup
    $("#login form").submit(function () {

        var form_name = $('#form_name').val();
        localStorage.setItem("#form_name", form_name);

    });
    var form_name = localStorage.getItem("#form_name");
    if (form_name != null && form_name != "undefined") {

        var about = $("#about p");
        about.html("<br><strong>bienvenido</strong>, " + form_name);
        about.append("<a href='#' id='logout'>Logout</a>");
        $("#login").hide();
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //accordion

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }
    //time
    if (window.location.href.indexOf('clock') > -1) {

        setInterval(function () {
            var clock = moment().format("hh:mm:ss");
            $("#clock").html(clock);
        }, 1000);


    }

    //validacion con plugin

    if (window.location.href.indexOf('contact') > -1) {


        $("form input[name='date']").datepicker(
            {
                dateFormat: 'mm-dd-yy'
            }
        );

        $.validate({
            lang: 'en',
            errorMessagePosition: 'top',
            scrollToTopOnError: true

        });
    }
}); 
