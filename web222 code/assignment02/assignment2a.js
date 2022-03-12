/*******************************************************************************
 * WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca
 * Academic Policy. No part of this assignment has been copied manually or
 * electronically from any other source (including web sites) or distributed to
 * other students.
 *
 * Name: Qing Zhang    Student ID: 130 982 218   Date: 2022-02-10
 *
 ******************************************************************************/

var people = [{ "id": 1, "firstName": "Cristie", "lastName": "Burgill", "gender": "Male", "birthDate": "11/12/1998", "email": "cburgill0@howstuffworks.com", "web": "https://biglobe.ne.jp", "creditScore": 777, "rating": 18.91 },
    { "id": 2, "firstName": "Morty", "lastName": "Coogan", "gender": "Female", "birthDate": "3/24/1999", "email": "mcoogan1@fastcompany.com", "web": "https://rambler.ru", "creditScore": 321, "rating": 19.23 },
    { "id": 3, "firstName": "Nikos", "lastName": "Sircombe", "gender": "Female", "birthDate": "7/12/1999", "email": "nsircombe2@themeforest.net", "web": "http://wunderground.com", "creditScore": 511, "rating": 7.73 },
    { "id": 4, "firstName": "Tasia", "lastName": "Fausset", "gender": "Male", "birthDate": "6/15/1999", "email": "tfausset3@amazon.co.jp", "web": "https://cornell.edu", "creditScore": 643, "rating": 16.62 },
    { "id": 5, "firstName": "Zoe", "lastName": "Jupe", "gender": "Genderfluid", "birthDate": "11/24/1998", "email": "zjupe4@timesonline.co.uk", "web": "http://google.ca", "creditScore": 583, "rating": 2.35 },
    { "id": 6, "firstName": "Bastian", "lastName": "Ballaam", "gender": "Female", "birthDate": "3/30/1993", "email": "bballaam5@icq.com", "web": "http://auda.org.au", "creditScore": 641, "rating": 18.64 },
    { "id": 7, "firstName": "Alonso", "lastName": "Passby", "gender": "Male", "birthDate": "10/20/1995", "email": "apassby6@stanford.edu", "web": "https://elpais.com", "creditScore": 437, "rating": 9.48 },
    { "id": 8, "firstName": "Chrisy", "lastName": "Extence", "gender": "Female", "birthDate": "1/19/1998", "email": "cextence7@intel.com", "web": "https://seattletimes.com", "creditScore": 470, "rating": 1.41 },
    { "id": 9, "firstName": "Giavani", "lastName": "Roughey", "gender": "Female", "birthDate": "8/31/1999", "email": "groughey8@vkontakte.ru", "web": "http://slate.com", "creditScore": 800, "rating": 9.82 },
    { "id": 10, "firstName": "Zachariah", "lastName": "Brunel", "gender": "Female", "birthDate": "6/12/1994", "email": "zbrunel9@microsoft.com", "web": "http://google.co.uk", "creditScore": 737, "rating": 6.66 },
];


/*****************************
 * Task 1
 *****************************/
function capNotFirstLetter(str) {
    return str[0].toLowerCase() + str.substr(1, str.length).toUpperCase();
}

/*****************************
 * Task 2
 *****************************/
var data = people.map(p => p);

for (var i = 0; i < data.length; i++) {
    data[i].firstName = capNotFirstLetter(data[i].firstName);
}
console.log(data);

/*****************************
 * Task 3
 *****************************/
var arrayNew = data.filter(element => element.creditScore > 400);

console.log(arrayNew);


/*****************************
 * Task 4
 *****************************/

data.sort(function(a, b) {
    var dateA = new Date(a.birthDate);
    var dateB = new Date(b.birthDate);
    return dateA - dateB;
})

console.log(data);