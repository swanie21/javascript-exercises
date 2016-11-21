var a = 1, b = 2, c = 3;

(function firstFunction() {
    var b = 5, c = 6;

    (function secondFunction() {
        var b = 8;
        console.log("a: "+a+", b: "+b+", c: "+c);
        
        (function thirdFunction() {
            var a = 7, c = 9;

            (function fourthFunction() {
                var a = 1, c = 8;
            })();
        })();
    })();
})();

// Challenge:
// In that file, copy the following code:
//   var a = 1, b = 2, c = 3;
//   (function firstFunction(){
//       var b = 5, c = 6;
//       (function secondFunction(){
//           var b = 8;
//           (function thirdFunction(){
//               var a = 7, c = 9;
//               (function fourthFunction(){
//                   var a = 1, c = 8;
//               })();
//           })();
//       })();
//   })();
// Use your knowledge of the variables' scope and place the following code
// inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6
//   console.log("a: "+a+", b: "+b+", c: "+c);
