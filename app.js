const express=require("express");
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT||4000;
  //for static
const staticpath=path.join(__dirname,'public');
const tempaltepath=path.join(__dirname,"./templates/views")
const partialpath=path.join(__dirname,'./templates/partials');
console.log(staticpath);
app.use(express.static(staticpath));
// for dynamic filr
app.set('view engine','hbs');
app.set("views",tempaltepath);
hbs.registerPartials(partialpath);

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});
app.get('/weather',(req,res)=>{
    res.render("weather");
});
app.get('*',(req,res)=>{
    res.render("404errorpage",{
        errorcomment:"OOPs! page is not found"
    });
});

app.listen(port,()=>{
    console.log(`listening at port 4000`);
})