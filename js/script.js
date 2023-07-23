
var contents = [
   {t:"Contact Me", p:" Twitter & Telegram"},
   {t:"Hello There!", p: "Welcoe to my CV home page. <br> Take a tour to know more about me or contact me"},
    {t: "About Me", p:` Hi, <br>
    I’m @Mazen-Othman <br>
    I’m interested in Mobile and Web development. <br>
    I’m currently learning Flutter and Node.js. <br>
    I’m looking to collaborate on big projects that can help the world and makes life eazier.`}
]


function animation() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }


function docState(btns) {
    b1.classList.remove("active");
    b2.classList.remove("active");
    b3.classList.remove("active");
    btns.classList.add("active");
    photo.classList.add("comp");
    first.classList.add("compp");
    myname.classList.add("compText");
}

function getContent(content) {
    var title = contents[content].t;
    var paragraph = contents[content].p;
    switch (content) {
        case 0:
            docState(b1)
            break;
        case 1:
            docState(b2);
            myname.classList.remove("compText");
            photo.classList.remove("comp");
            first.classList.remove("compp");
            break;
        case 2:
            docState(b3)
            break;
        default:
            docState(b2)
            break;
    }
    document.getElementById('parTitle').innerHTML = title;
    document.getElementById('content').innerHTML = paragraph;
}