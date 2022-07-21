var html = (s) => document.createElement(s);
function coloredtext(text,color)
{
    var textElement = document.createElement("span")
    textElement.style.color = color;
    textElement.innerText = text;
    return textElement;
}
function contactEntry(site,name)
{
    var entry = html("div");
    entry.appendChild(coloredtext(site+": ","#DCDCAA"));
    entry.appendChild(coloredtext(name,"#9CDCFE"));
    entry.appendChild(html("br"));
    return entry;
}
let body = document.querySelector("body");
let box = document.createElement("div");
box.className = "box";
box.id = "info";
var append = (e) => box.appendChild(e);
append(coloredtext("Добро пожаловать на микросайт JavaJumper'a","#CCC"));
append(html("hr"));
var contactText = coloredtext("Контактная информация:","#DF0");
contactText.style.marginBottom = "1vw";
append(contactText);

append(contactEntry("Telegram","@JavaJumper"));
append(contactEntry("Discord","JavaJumper#8438"));
append(contactEntry("E-mail","jumpergooog@gmail.com"));
body.appendChild(box);  