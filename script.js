const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");


let gambar=[
"assets/foto1.jpg",
"assets/foto2.jpg",
"assets/foto3.jpg"
];


let syair=[

"Rezeki datang saat waktunya tiba,\nTetap yakin dan jangan menyerah.",

"Langkah kecil hari ini,\nMembawa kemenangan esok hari.",

"Kesabaran adalah kunci,\nKeberhasilan akan mengikuti."

];


function generateSyair(){

let img=new Image();

let randomGambar=
gambar[Math.floor(Math.random()*gambar.length)];


let text=
syair[Math.floor(Math.random()*syair.length)];


img.src=randomGambar;


img.onload=function(){

ctx.drawImage(img,0,0,800,800);


// overlay gelap
ctx.fillStyle="rgba(0,0,0,0.45)";
ctx.fillRect(0,0,800,800);


// text
ctx.fillStyle="#d4af37";
ctx.font="bold 45px Arial";
ctx.textAlign="center";


let lines=text.split("\n");


lines.forEach((line,index)=>{

ctx.fillText(
line,
400,
350+(index*70)
);

});


}

}



function download(){

let link=document.createElement("a");

link.download="syair.png";

link.href=canvas.toDataURL();

link.click();

}
