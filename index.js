const dot = $('.dot');

function changeActiveDot(newActiveDot) {
    $('.active-dot').toggleClass('active-dot');
    $(newActiveDot).toggleClass('active-dot');
}

dot.click((ev) => changeActiveDot(ev.target));