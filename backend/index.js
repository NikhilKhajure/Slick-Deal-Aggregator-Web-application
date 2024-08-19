const express = require("express");
const data = require("./price");
const Reviews = require("./Flipkart/flipkartoffers");
const AllProducts = require("./Differentproducts/Allproducts");
const HeaderData = require("./Headerdata/header");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { default: mongoose } = require("mongoose");
const user = require("./userModel/usermodel");
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
    try {
        const parameter = req.query.q;
        const products = await data(parameter);
        return res.json(products);
        console.log(products)
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get("/flipkart", async (req, res) => {
    try {
        const parameter = req.query.q;
        const flipkartreviews = await Reviews(parameter);
        return res.json(flipkartreviews);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get("/headerdata", async (req, res) => {
    try {
        const parameter = req.query.q;
        const flipkartreviews = await HeaderData(parameter);
        return res.json(flipkartreviews);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get("/allproducts", async (req, res) => {
    try {
        const mdata = await AllProducts();
        return res.json(mdata);

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Mongoose Code
const mongoURL = process.env.mongoURL;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected");
}).then((error) => {
    console.log(`Error ${error}`)
})
app.post("/auth/register", async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const usernameCheck = await user.findOne({ username });
        if (usernameCheck) {
            return res.json({ msg: "Username Is Aleredy Used", status: false });
        }
        const emailCheck = await user.findOne({ email });
        if (emailCheck) {
            return res.json({ msg: "Email Is Aleready Used", status: false })
        }
        const newUser = await user.create({
            username,
            email,
            password
        });
        return res.json({ status: true, msg: "User Created Successfull", newUser });
    } catch (error) {
        next(error)
    }
})
app.post("/auth/login", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const usernameCheck = await user.find({ username });
        if (usernameCheck.length === 0) {
            return res.json({ msg: "Username Or Password Is Incorrect", status: false });
        }
        const passwordCheck = await user.find({ password });
        if (passwordCheck.length === 0) {
            return res.json({ msg: "Password Is Incorrect", status: false });
        }
        return res.json({ msg: "SignIn Successfully", status: true });
    } catch (error) {
        next(error);
    }
})
app.listen(PORT);