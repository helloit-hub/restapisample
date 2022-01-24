const env = require("dotenv");
env.config();
const PORT = process.env.PORT || 3000;
const mongoURL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qj3fx.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
module.exports = { PORT, mongoURL };
