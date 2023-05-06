const express = require("express");
const { connection } = require("./configs/db");
const { noticeRouter } = require("./routes/notice.router");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", noticeRouter);

app.listen(8080, async () => {
    try {
        await connection;
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log("server is listening at port 8080");
})