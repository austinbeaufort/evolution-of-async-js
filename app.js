'use strict';
// function saveToTheDb(value) {
//     return new Promise(function(resolve, reject) {
//         db.values.insert(value, function(err, user) {

//             if(err) {
//                 return reject(err);
//             }
//             resolve(user);
//         })
//     }
// }

// async function save(Something) {
//     try {
//         await Something.save()
//     } catch (ex) {

//     }
//     console.log('success');
// }

// async function fetchAvatarUr(userId) {
//     const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     const data = await response.json()
//     return data.imageUrl
//     // return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     // .then(response => response.json())
//     // .then(data => data.imageUrl)
// }


// const result = fetchAvatarUr(123);
// console.log(result);


// function fetchCatAvatars(userId) {
//     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     .then(response => response.json())
//     .then(user => {
//         return user.cats.map(catId => {
//             return fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//                 .then(response => response.json())
//                 .then(catData => catData.imageUrl)
//         })
//     })
// }

// const result = fetchCatAvatars(123);
// console.log(result);


// let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
    
//     // cleaning the room

//     let isClean = false;

//     if(isClean) {
//         resolve('Clean');
//     } else {
//         reject('not Clean');
//     }

// })

// promiseToCleanTheRoom.then(function(fromResolve) {
//     console.log(`the room is ${fromResolve}`);
// }).catch(function(fromReject) {
//     console.log(`the room is ${fromReject}`);
// })


// let cleanRoom = function() {
//     return new Promise(function(resolve, reject) {
//         resolve('Cleaned The Room');
//     });
// };

// let removeGarbage = function(message) {
//     return new Promise(function(resolve, reject) {
//         resolve(message + ' remove Garbage');
//     });
// };

// let winIcecream = function(message) {
//     return new Promise(function(resolve, reject) {
//         resolve(message + ' won Icecream');
//     });
// };

// cleanRoom().then(function(result) {
//     return removeGarbage(result);
// }).then(function(result) {
//     return winIcecream(result);
// }).then(function(result) {
//     console.log('finished ' + result);
// })

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//     console.log('all finished');
// })

// Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//     console.log('one of them is finished');
// })

// function http(url, method, successCallback, errorHandler) {
//     setTimeout(function() {
//         let data;
//         if(data) {
//             successCallback(data);
//         } else {
//             errorHandler('No data');
//         }
//     }, 1000);
// }

// http('http://google.com', 'GET', function(data) {
//     console.log(data);
// }, function(err) {
//     console.log(err);
// });

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Good to go!');
//     }, 1000);

//     setTimeout(() => {
//         reject('uh oh');
//     }, 500);
// });

// myPromise.then((resolve) => {
//     console.log(resolve);
// })
// .catch((err) => {
//     console.log(err);
// })