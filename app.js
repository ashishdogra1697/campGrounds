var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name:"Macloedgunj", image:"https://5.imimg.com/data5/EC/YY/MY-13903575/mcleodganj-500x500.jpg"},
    {name:"Dalhousie", image:"https://cdn1.goibibo.com/t_tg_fs/chamba-dalhousie-147696787483-orijgp.jpg"},
    {name:"Kasol", image:"https://www.nativeplanet.com/img/2017/11/1kasol-15-1510723722.jpg"},
    {name:"Ladakh", image:"https://images.assettype.com/swarajya%2F2020-09%2Fdb17472f-3225-4d97-84c8-9f9ba5778003%2Froad_4212028_960_720.jpg?w=640&q=75&auto=format%2Ccompress"}
];

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/campgrounds", function(req, res){
       res.render("campgrounds", {campgrounds:campgrounds});
});


app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);

    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(8080, function(){
    console.log("yelpcamp server has started");
});