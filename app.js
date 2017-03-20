

function area (radius) {
   return Math.round(Math.PI * radius * radius);//Math.pi gives the value of PI. ParseInt to make round figure
}
document.write("Area of circle is "+ area(parseFloat(prompt("Enter radius"))));// Float the entered number and call method area