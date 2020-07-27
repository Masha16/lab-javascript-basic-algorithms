// Iteration 1: Names and Input
console.log("Hello, I m ready");
let hacker1="Maria";
console.log(`The driver's name is ${hacker1}`);

let hacker2="Groupmate"; 
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
console.log("Wow, you both have equally long names, ${hacker2.length} characters!")
}

// Iteration 3: Loops

let tallHacker1=hacker1.toUpperCase()
console.log(tallHacker1.split(""));

let tallHacker2=hacker2.toUpperCase()
console.log(tallHacker2.split(""));

for (let i=hacker2.length; i>=0; i--) {
  console.log(hacker2.charAt(i))
}

if (hacker1.localeCompare(hacker2)<0) {
  console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2)>0)  {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}

let lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet massa enim. Donec at accumsan lorem. Duis posuere quam sed quam auctor, eget ullamcorper purus condimentum. Nunc eget libero in nisi cursus sodales pellentesque vitae sem. Ut vitae ipsum venenatis, luctus turpis ut, rutrum ipsum. Duis hendrerit, sem eu suscipit interdum, nisi metus vestibulum turpis, a mollis velit lectus nec lorem. Fusce non efficitur metus. Donec et erat ut sapien varius dignissim. Phasellus fermentum enim nec turpis ultricies viverra. Nulla tincidunt odio quis pretium aliquet. Vestibulum eu magna a felis accumsan ornare nec et elit. Fusce pulvinar mauris quis condimentum dignissim. Etiam condimentum enim sem. Morbi pellentesque eros ac tempor mattis. Quisque at faucibus neque. Suspendisse potenti. Nulla vehicula sit amet sapien in tempor. Ut dapibus faucibus maximus. Cras dignissim mattis erat. Nulla facilisi. Praesent volutpat fringilla viverra. Etiam efficitur tellus ut pharetra vehicula. Praesent rutrum, lorem quis consectetur sodales, tellus ex rhoncus sapien, at tempor nisi ex lacinia neque. Phasellus malesuada metus dolor, in scelerisque est porta sed. Nam eget ante in est commodo euismod non sed sem. Pellentesque tempor leo in vestibulum porta. Phasellus ac enim maximus, aliquet odio vel, condimentum velit. Sed vehicula auctor sodales. Maecenas tortor risus, sollicitudin quis iaculis vel, rhoncus quis ligula. Proin commodo, lectus et pretium aliquet, lorem nibh molestie neque, finibus facilisis augue orci auctor magna. Vivamus ante turpis, commodo sit amet porttitor nec, condimentum vel ipsum. Mauris non mi viverra, placerat augue non, scelerisque est. Ut convallis odio eget ante dignissim, tempus pretium est mollis. Fusce varius, leo in semper consequat, erat lectus faucibus mauris, id consectetur velit neque non lectus. In quis fringilla mi, vel tincidunt nisl. Nullam et tempus nunc. Cras ac ante sit amet leo condimentum consectetur vitae vitae ex."


console.log(lorem.split(" ").length)
console.log(lorem.split("et").length-1)
