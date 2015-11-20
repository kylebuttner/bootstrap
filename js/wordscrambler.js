$(document).ready(function(){
  var str = prompt("Type in some words");

function mixwords(str){

  if(!isNaN(str)) {return undefined};

  str = str.split(" ");


  for (i=0;i<str.length;i++){
    if (str[i].length<2){str[i] = str[i]}
    else {
    str[i] = str[i][0] + str[i].substring(1,str[i].length-1).split('').sort(function(){return 0.5-Math.random()}).join('') + str[i][str[i].length-1];
    }
  };

  return str = str.join(' ');

}

document.write(mixwords(str));

});
