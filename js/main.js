///<reference types="../@types/jquery"/>

const root = document.querySelector(':root');
const closeMenu = $('.fa-xmark');
const openMenu = $('.ico');
const menuContent = $('.header .menu .content');


// ==>Close the Menu

closeMenu.on('click', function () {
    menuContent.css({
        transform: 'translateX(-100%)',
        transition: '1s'
    })
    if (openMenu.css('left') == `${$(menuContent).innerWidth()}px`) {
        openMenu.css({
            left: '10%',
            transition: '2s'
        })
    }
})

// ==>Open the Menu 
openMenu.on('click', function () {
    menuContent.css({
        transform: 'translateX(0)',
        transition: '3s'
    })
    openMenu.css({
        left: '100%'
    })


})

// ==> Second section indecator

$('#indecator .content h3').on('click', function () {
    $(this).next().slideToggle()
    $('.first').slideUp()
    $('.first').removeClass('first')
    $(this).next().addClass('first')
})

// ==> third section timer 

window.onload = function() {
   
    countDownToTime("13 october 2023 1:54:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }


// ==> fourth section Contact 

$('#contact form .message').on('input', function () {
    let message = $('#contact form .message').val();
    console.log(message);
    const maxMessage = 100;
    $('#contact form .message').val($('#contact form .message').val().substring(0, 99))
    $('#contact form p span').html(maxMessage - message.length);
    if (maxMessage - message.length == 0) {

        $('#contact form .p-alert').html(`<div class="alert alert-danger mb-4" role="alert">
        you can not write more than 100 letters!
        </div>`)
    }

})