alert('Welcome to my website');

var yourAage= prompt('please enter your age');

if (yourAage >=50 ){
document.write('you are too old');
document.write('<img src="https://thumbs.dreamstime.com/z/old-elderly-male-adult-confused-old-person-108512602.jpg">');
}else if(yourAage >=18){
document.write('you are young');
document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Zz4FGRCL69kDU-kehtc8JqGaBPVnNF9oxw&usqp=CAU">');
}else if(yourAage >=0){
  document.write('you are a baby');
  document.write('<img src="https://static.boredpanda.com/blog/wp-content/uploads/2019/07/baby-portraits-teeth-added-coffee-creek-studio-amy-haehl-fb-png__700.jpg">');
}
var number=10;
console.log(number);

if(number!=='10'){
  console.log('true')
}else{
  console.log('false')
}

var x=5
var y=10

if(x*y==30){
  console.log('its true',50);
}else {
  console.log('its false',30);
}

var avengerName= prompt('please enter your avenger name')

while(avengerName !=='hulk' && avengerName !=='ironman' && avengerName !=='thor' ){
  avengerName= prompt('please enter hulk or ironman or thor')
}
var yourchoice;

if (avengerName==='hulk'){
  yourchoice=('<img src="https://i.pinimg.com/originals/c2/15/15/c215156bc1b330248b58381cf63ad9ad.jpg">');
}else if (avengerName==='ironman'){
  yourchoice=('<img src="https://i.pinimg.com/originals/78/ac/aa/78acaad3c2890c0d47f94ec7b3cce9fb.jpg">');
}else if (avengerName==='thor'){
  yourchoice=('<img src="https://i.pinimg.com/originals/01/e8/aa/01e8aa52b1fed0eaa3840d105c328fed.jpg">');
}

var imagesNumber= prompt('the number of images you want to see ??')

for (var i=0 ; i < imagesNumber ;i++){
  document.write(yourchoice)
}

