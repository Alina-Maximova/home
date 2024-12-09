const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

const db = new JsonDB(new Config("db.json"));

const data = db.getData("/");

if (!data.users) db.push("/users", []);
if (!data.session) db.push("/session", {});
if (!data.files) db.push("/files", {});
if (!data.category) db.push("/category", []);
if (!data.product) db.push("/product", []);
if (!data.order) db.push("/order", []);


module.exports= db;