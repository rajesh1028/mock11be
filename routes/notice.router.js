const express = require("express");
const { NoticeModel } = require("../models/notice.model");
const noticeRouter = express.Router();

noticeRouter.get("/", async (req, res) => {
    try {
        const data = await NoticeModel.find();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

noticeRouter.post("/", async (req, res) => {
    try {
        let date = new Date();
        let { name, title, description } = req.body;
        let post = new NoticeModel({ name, title, description, date });
        await post.save();
        res.json("data posted successfully");
    } catch (error) {
        res.send(error);
    }
});

noticeRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let date = new Date();
        let { name, title, description } = req.body;
        let post = await NoticeModel.findByIdAndUpdate({ _id: id }, { name, title, description, date });
        res.json("data updated successfully");
    } catch (error) {
        res.send(error);
    }
});

noticeRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let post = await NoticeModel.findByIdAndDelete({ _id: id });
        res.json("data deleted successfully");
    } catch (error) {
        res.send(error);
    }
});

module.exports = { noticeRouter };