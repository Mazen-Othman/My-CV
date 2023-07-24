
const docLang = ()=>{
  const EN = "../assets/json/EN.json";
  const AR = "../assets/json/AR.json";
  if (navigator.language = 'ar') {
    html.classList.remove('en');
    html.classList.add('ar');
    return AR
  } else {
    html.classList.remove('ar');
    html.classList.add('en');
    return EN
  }
}


//var data;
//./assets/json/data.json
   

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

    fetch(docLang())
   .then(response => response.json())
   .then(data => 
    {
      var title = data.content[content].t;
    var paragraph = data.content[content].p;
      document.getElementById('pageTitle').innerHTML = data.shortName;
      document.getElementById('myname').innerHTML = data.fullName;
      document.getElementById('parTitle').innerHTML = title;
      document.getElementById('content').innerHTML = paragraph;
      
    }
    )
    
}