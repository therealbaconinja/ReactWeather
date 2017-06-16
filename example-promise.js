//callback classic with problems
// function getTempCallback (location, callback) {
//   callback(undefined,78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err){
//     console.log('error',err);
//   } else {
//     console.log('success',temp);
//   }
// });
//
// //promise
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout( function () {
//       resolve(79);
//       reject('City not found!');
//     }, 5000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

//Challenge Area
//create add function to handle both promise cases

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout( function () {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Input values are not a number!');
      }
    }, 1000);
  });
}

addPromise(2,2).then(function (temp) {
  console.log('success', temp);
}, function (err) {
  console.log('error', err);
});

addPromise('a',9).then(function (temp) {
  console.log('success', temp);
}, function (err) {
  console.log('error', err);
});
