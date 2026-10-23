const db = require("./db")

db.listar()
    .then(console.table)
    .catch(console.error)
    .finally(() => process.exit());