const express = require("express");
const cors = require("cors");
const main = require("./Config/db");
const UserRouter = require("./Routes/user.route");
const AdminRouter = require("./Routes/admin.route");
const RulesRouter = require("./Routes/rules.route");

require("dotenv").config();

const PORT = 3500 || process.env.PORT;


const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.use("/api/user", UserRouter);
app.use("/api/admin",AdminRouter);
app.use("/api/rules",RulesRouter)



app.listen(PORT, () => {
    main();
    console.log(`Connected to server at port ${PORT}`);
})