var pianoKeyboards = document.querySelectorAll(".piano");

pianoKeyboards.forEach(piano_key => piano_key.addEventListener("click", function()
{
    switch(this.innerHTML)
    {
        case 'a':
            (new Audio('sounds/do.mp3')).play();
            break;
        case 's':
            (new Audio('sounds/re.mp3')).play();
            break;
        case 'd':
            (new Audio('sounds/mi.mp3')).play();
            break;
        case 'f':
            (new Audio('sounds/fa.mp3')).play();
            break;
        case 'g':
            (new Audio('sounds/sol.mp3')).play();
            break;
        case 'h':
            (new Audio('sounds/la.mp3')).play();
            break;
        case 'j':
            (new Audio('sounds/si.mp3')).play();
            break;
        case 'k':
            (new Audio('sounds/do.mp3')).play();
            break;

    }
}
));

document.addEventListener("keydown", function(event)
{
    switch(event.key)
    {
        case 'a':
            (new Audio('sounds/do.mp3')).play();
            break;
        case 's':
            (new Audio('sounds/re.mp3')).play();
            break;
        case 'd':
            (new Audio('sounds/mi.mp3')).play();
            break;
        case 'f':
            (new Audio('sounds/fa.mp3')).play();
            break;
        case 'g':
            (new Audio('sounds/sol.mp3')).play();
            break;
        case 'h':
            (new Audio('sounds/la.mp3')).play();
            break;
        case 'j':
            (new Audio('sounds/si.mp3')).play();
            break;
        case 'k':
            (new Audio('sounds/do.mp3')).play();
            break;
    }
});

