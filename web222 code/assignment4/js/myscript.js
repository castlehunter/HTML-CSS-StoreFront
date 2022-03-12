// All you JavaScript code for assignment 4 should be in this file
/*******************************************************************************
 * WEB222 – Assignment 4
 * I declare that this assignment is my own work in accordance with Seneca
 * Academic Policy. No part of this assignment has been copied manually or
 * electronically from any other source (including web sites) or distributed to
 * other students.
 *
 * Name: Qing Zhang    Student ID: 130982218   Date: 2022-03-11
 *
 ******************************************************************************/

function displayFlags() {
    let links = document.querySelector('#links');
    let flagImages = document.querySelector('#flag-images');

    flagImages.onclick = function() {
        links.removeChild(flagImages);

        let flags = document.querySelector('#flags');

        for (let j = 0; j < 5; j++) {
            let img1 = document.createElement('img');
            flags.appendChild(img1);

            let str = './flags/' + countries[j].Name + '-flag.png';
            img1.setAttribute('src', str);

            let alt = countries[j].Name + 'Flag';
            img1.setAttribute('alt', alt);

            img1.setAttribute('width', '200px');
            img1.setAttribute('height', '200px');
        }
    }
}

window.onload = function() {
    // Header
    let heading2 = document.querySelector('#heading2');
    let h2 = document.createElement('h2');
    heading2.appendChild(h2);
    let textnode = document.createTextNode('Country List');
    h2.appendChild(textnode);

    // Table
    let table1 = document.createElement('table');

    // Table head
    let th = document.createElement('th');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td1Text = document.createTextNode('Country');
    let td2Text = document.createTextNode('Capital');

    td1.appendChild(td1Text);
    td2.appendChild(td2Text);
    th.appendChild(td1);
    th.appendChild(td2);
    table1.appendChild(th);

    // Table Body
    for (let i = 0; i < countries.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td1Text = document.createTextNode(countries[i].Name);

        let td2 = document.createElement('td');
        let td2Text = document.createTextNode(countries[i].Capital);
        tr.appendChild(td1);
        td1.appendChild(td1Text);
        tr.appendChild(td2);
        td2.appendChild(td2Text);
        table1.appendChild(tr);
    }

    document.querySelector('#table').appendChild(table1);
    document.querySelector('#table').style = "border: 1px solid black"

    // Image Link
    displayFlags();
}