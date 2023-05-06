const mongoose = require("mongoose");

const noiceSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    date: Date
});

const NoticeModel = mongoose.model("notice", noiceSchema);

module.exports = { NoticeModel };