// grouping the hero text
let header = document.getElementsByTagName('header')[0];
let heroText = document.createElement('div');
heroText.id = 'heroText';  // giving the newly created div an id selector
let h1 = document.getElementsByTagName('h1')[0];
let phero = document.getElementsByTagName('p')[0];
heroText.append(h1, phero);
header.appendChild(heroText);

//laying out the two-column row
let body = document.getElementsByTagName('body')[0];
let main = document.createElement('div');
main.classList.add('main');
let sidebar = document.getElementsByTagName('section')[4];
sidebar.classList.add('sidebar');
main.append(header, sidebar);
body.appendChild(main);
let about = document.getElementsByTagName('section')[0];
about.classList.add('about', 'temp');
body.insertBefore(main, about);

//laying out the four-cell row
let info = document.createElement('div');
info.classList.add('info');
let infoRow1 = document.createElement('div');
infoRow1.classList.add('infoRow1');
let infoRow2 = document.createElement('div');
infoRow2.classList.add('infoRow2');
let howToJoin = document.getElementsByTagName('section')[2];
howToJoin.classList.add('howToJoin', 'temp');
let leagueFees = document.getElementsByTagName('section')[3];
leagueFees.classList.add('leagueFees', 'temp');
let locationOfGames = document.getElementsByTagName('section')[4];
locationOfGames.classList.add('locationOfGames', 'temp');
infoRow1.append(about, howToJoin)
infoRow2.append(leagueFees, locationOfGames);
info.append(infoRow1, infoRow2)
body.appendChild(info);
body.insertBefore(main, info);
let footer = document.getElementsByTagName('footer')[0];
body.insertBefore(main, footer);
body.insertBefore(info, footer);


