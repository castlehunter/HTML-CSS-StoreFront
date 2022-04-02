// script

function displayFlags() {
    let links = document.querySelector('#links');
    let flagImages = document.querySelector('#flag-images');

    flagImages.onclick = function() {
        links.removeChild(flagImages);

        let flags = document.querySelector('#flags');

        for (let j = 0; j < 5; j++) {
            let img1 = document.createElement('img');
            flags.appendChild(img1);

            let str = cars[i].
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
    // let heading2 = document.querySelector('#heading2');
    // let h3 = document.createElement('h3');
    // heading2.appendChild(h3);
    // let textnode = document.createTextNode('A list of cars');
    // h3.appendChild(textnode);

    // Table
    let table1 = document.createElement('table');
    //table1.style.border = "1px solid black"  // outer border
    table1.setAttribute('border', '1px solid'); // collapsed border


    // Table head
    let tr = document.createElement('tr');
    let thMake = document.createElement('th');
    let th2 = document.createElement('th');
    let thYear = document.createElement('th');
    let thImage = document.createElement('th');
    let th4 = document.createElement('th');


    let thMakeText = document.createTextNode('Make');
    let th2Text = document.createTextNode('Model');
    let thYearText = document.createTextNode('Year');
    let thImageText = document.createTextNode('Photo');
    let th4Text = document.createTextNode('Description');

    let currentImageIndex = 0;

    thMake.appendChild(thMakeText);
    th2.appendChild(th2Text);
    thYear.appendChild(thYearText);
    thImage.appendChild(thImageText);
    th4.appendChild(th4Text);

    tr.appendChild(thMake);
    tr.appendChild(th2);
    tr.appendChild(thYear);
    tr.appendChild(thImage);
    tr.appendChild(th4);
    table1.appendChild(tr);

    // Table Body
    for (let i = 0; i < cars.length; i++) {
        let tr = document.createElement('tr');

        // Make cell
        let td1 = document.createElement('td');
        td1.style.textAlign = "center";
        td1.style.padding = "10px 10px 10px 10px";
        let td1Text = document.createTextNode(cars[i].Make);

        // Model cell
        let td2 = document.createElement('td');
        td2.style.textAlign = "center";
        td2.style.padding = "10px 10px 10px 10px"
        let td2Text = document.createTextNode(cars[i].Model);

        // Year cell
        let tdYear = document.createElement('td');
        tdYear.style.textAlign = "center";
        tdYear.style.padding = "10px 10px 10px 10px"
        let tdYearText = document.createTextNode(cars[i].Year);

        let tdImg = document.createElement('td');
        tdImg.style.textAlign = "center";
        let tdImgImg = document.createElement('img');
        tdImgImg.setAttribute('src', cars[i].Image[currentImageIndex]);
        // tdImgImg.setAttribute('width', 300);
        tdImgImg.setAttribute('height', 170);


        tdImgImg.addEventListener('click', function(e) {
            currentImageIndex++;
            if (currentImageIndex == cars[i].Image.length) {
                currentImageIndex = 0;
            }
            tdImgImg.setAttribute('src', cars[i].Image[currentImageIndex]);
            e.stopPropagation();
        })


        let td4 = document.createElement('td');
        td4.style.padding = "10px 10px 10px 10px";

        let td4Text = document.createTextNode(cars[i].Description);

        tr.appendChild(td1);
        td1.appendChild(td1Text);
        tr.appendChild(td2);
        td2.appendChild(td2Text);
        tr.appendChild(tdYear);
        tdYear.appendChild(tdYearText);

        tr.appendChild(tdImg);
        tdImg.appendChild(tdImgImg);
        tr.appendChild(td4);
        td4.appendChild(td4Text);
        table1.appendChild(tr);



    }



    document.querySelector('#table').appendChild(table1);
    //  document.querySelector('#table').style = "border: 1px solid black"

    // Image Link
    displayFlags();
}