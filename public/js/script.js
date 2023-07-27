
const docLang = ()=>{
  const lang = navigator.language
const EN = "../assets/json/EN.json";
const AR = "../assets/json/AR.json";
const siteLang = getLang();

switch (siteLang) {
  case 'ar':
    html.classList.remove('en');
    html.classList.add('ar');
    return AR
    break;
  case 'en':
    html.classList.remove('ar');
    html.classList.add('en');
    return EN
    break
  default:
    if (lang == 'ar') {
      html.classList.remove('en');
      html.classList.add('ar');
      return AR
    } else {
      html.classList.remove('ar');
      html.classList.add('en');
      return EN
    }
    break;
}

 
}

if (event.target.activeElement.tagName.toLowerCase() === 'body') {
  // The user clicked the browser's back button
  alert("Browser back button is clicked.");
}

//var data;
//./assets/json/data.json
function loadPage(){
  const path = window.location.pathname;
  switch (path) {
    case "/about":
      getContent(2)
      break;
    case "/home":
      getContent(1)
      break;
    case "/contact":
      getContent(0)
      break;  
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



function getLang() {
  let name = "lang" + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setLang(lang) {
  document.cookie = "lang=" + lang;
}


function langBtn() {
 const siteLang  = getLang();
 const brLang = navigator.language;
 switch (siteLang) {
  case "ar":
    setLang("en");
    break;
  case "en":
    setLang("ar");
    break;
  default:
    if (brLang == 'en') {
      setLang("ar")
    } else {
      setLang("en")
    }
    break;
 }
 navigation.reload();
}

function firstCharToUpperCase(string){
const txt = string;
const first = txt.charAt(0);
const txt2 = txt.slice(1);
const upper = first.toUpperCase();
const final = upper + txt2;
return final;
}

function getContent(content) {
  const path = window.location.pathname;
  function nav(path) {
    window.history.pushState("","",path)
    fetch(docLang())
    .then(response => response.json())
    .then(data => 
     {
       var title = data.content[content].t;
     var paragraph = data.content[content].p;
       document.getElementById('pageTitle').innerHTML = data.shortName + ": " + firstCharToUpperCase(path.slice(1));
       document.getElementById('myname').innerHTML = data.fullName;
       document.getElementById('parTitle').innerHTML = title;
       document.getElementById('content').innerHTML = paragraph;
       
     }
     )
  }
    switch (content) {
        case 0:
            docState(b1)
            nav("/contact")
 
            break;
        case 1:
            docState(b2);
            nav("/home")
 
            myname.classList.remove("compText");
            photo.classList.remove("comp");
            first.classList.remove("compp");
            break;
        case 2:
            docState(b3)
            nav("/about")
 
            break;
        default:
            docState(b2)
            break;
    }

   
    
}