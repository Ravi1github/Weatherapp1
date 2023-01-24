const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp_realvalue=document.getElementById('temp_realvalue');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');
const day=document.getElementById('day');
const todaydata=document.getElementById('todaydata');

//for date
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let days = weekday[d.getDay()];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let month = months[d.getMonth()];
let date=d.getDate();



submitbtn.addEventListener('click',getinfo);
 async function getinfo (event){
     event.preventDefault();
    let cityval=cityname.value;
   

     if(cityval===""){
   city_name.innerHTML='please Enter the city name';
   //adiing the class
   datahide.classList.add('data_hide');
   
     }
     else{
          try{
               let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=938932f0aae41b052713d9a2d3a2ae84`;
               //fetucing from url
               const response=await fetch(url);
               data= await response.json();
               const arrdata=[data];
               temp_realvalue.innerHTML=arrdata[0].main.temp
               city_name.innerHTML=`${arrdata[0].name} , ${arrdata[0].sys.country}`;
               tempmood=arrdata[0].weather[0].main;
               day.innerHTML=days;
               todaydata.innerHTML=date +" "+month;
               if(tempmood==='Clear'){
                    temp_status.innerHTML="<i class ='fa fa-sun' style='color:#eccc68;'></i> ";
               }
              else if(tempmood==='Clouds'){
                    temp_status.innerHTML="<i class ='fa fa-cloud' style='color:#f1f2f6;'></i> ";
               }
               else if(tempmood==='Rain'){
                    temp_status.innerHTML="<i class ='fa fa-rain' style='color:#a4b0be;'></i> ";
               }
               else{
                    temp_status.innerHTML="<i class ='fa fa-sun' style='color:#eccc68;'></i> ";   
               }
               datahide.classList.remove('data_hide');


          }
          catch{
               city_name.innerHTML='please Enter the city name properly';
               datahide.classList.add('data_hide');
          }

     }
     
}
 