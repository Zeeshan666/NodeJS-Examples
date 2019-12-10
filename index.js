
// var rect = {
// 	perimeter: (x, y) => (2*(x+y)),
// 	area: (x, y) => (x*y)
// };

var rect = require('./rectangle')

const rectanlge =(l,b)=>{
console.log("Solving for rectangle with l = " + l + " and b = " + b);
if (l <= 0 || b <= 0) {
    console.log("Rectangle dimensions should be greater than zero:  l = "
           + l + ",  and b = " + b);
}else{
    console.log("the area of rectangle is" +rect.area(l,b))
    console.log("the perimeter of rectangle is" +rect.peremeter(l,b))
    

}
}

rectanlge(2,4);
rectanlge(3,5);
rectanlge(0,5);
rectanlge(-3,5);