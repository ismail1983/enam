
function text(){
var person={fname:'Ismail',lname:'Hossain',age:'31',height:'5.7 inches'};

document.getElementById('demo').innerHTML=person.fname+' '+person.lname+' is '+person.age+' years old and '+person.height+' tall ';
}
function text1(){
function person(fname,lname,age){
	 this.firstName=fname;
	 this.lastName=lname;
	 this.pAge=age;
}
var myWife=new person('Sadia','Hossain',22);
var mySon=new person('Khalid','Saifullah',0.2);

document.getElementById('demo1').innerHTML='MY Wife Is '+myWife.firstName+' MY Son Is '+mySon.lastName+' I love them too much';
}
function demo2(){
	document.getElementById('dt').innerHTML=Date();
}

function text2(){
	document.getElementById('demo3').innerHTML="I Miss You Sadia";
		document.getElementById('sp0').innerHTML="I am crying for you Khalid";
	
}
function demo4(){
var car='Prias';
document.getElementById('pt').innerHTML=car;
}