const express=require('express');
const path=require("path");
const bcrypt = require("bcrypt");
const collection=require("./config");

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    try {

        const {name, password} = req.body;
        

        const existingUser = await collection.findOne({name});
        if (existingUser) {
            // console.log("User already exists");
            return res.send("User already exists.Please login instead.");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await collection.create({
            name: name,
            password:hashedPassword
        });
        console.log("User registered successfully");
        res.redirect("/");

    } catch (error) {
        console.log("Error:", error);
    }
});


app.post("/login", async (req, res) => {
    try {

        const check = await collection.findOne({ name: req.body.name });

        // 👇 if user NOT found
        if (!check) {
            return res.send("User name not found");
        }

        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            check.password
        );

        if (isPasswordMatch) {
            res.render("home");
        } else {
            res.send("Invalid password");
        }

    } catch (error) {
        console.log(error);
        res.send("Wrong Details");
    }
});

app.listen(3200);