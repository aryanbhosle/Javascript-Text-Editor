inputform=()=>{
let input=document.getElementById('input-text').value;
 document.getElementById('output-text').innerText=input;
}

 makeBold=(eme)=>{
eme.classList.toggle('active');
document.getElementById('output-text').classList.toggle('bold');

}

makeItalic=(eme)=>{
	eme.classList.toggle('active');
	document.getElementById('output-text').classList.toggle('italic');
}

// function makeUnderline(eme){
// eme.classList.toggle('active');
// document.getElementById('output-text').classList.toggle('underline');
// }


 makeUnderline=(eme)=>{
eme.classList.toggle('active');

let form_out=document.getElementById('output-text');
if(form_out.classList.contains('underline')){
	form_out.classList.remove('underline');
}
else{
	form_out.classList.add('underline');
}
}


 makeAlign=(eme, typeAlign)=>{

	document.getElementById('output-text').style.textAlign=typeAlign;
}


////no need this///////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////\\\\\\\\\\\\\\/\\\\\\\\\\\\/\\\\\\\\\\\\\\\\\////////////////\\\\\\

// function addtext(){
// let firstname='aryan';
// let lastname='bhosle';
// let fullname= `${firstname} ${lastname}`;
// return fullname;

// }

// console.log(addtext());


// let score=5;
// let result=`${score >0 ? `${score} Result`:"no Result found"}`;
// console.log(result);
