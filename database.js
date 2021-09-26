const mongoose = require('mongoose');

const connectDataBase = () => { mongoose.connect(process.env.DB_LOCAL_URI,
    {
        useNewUrlParser:true,
        
    }).then(con => {
        console.log(`Mongo Db Database connected dwith Host: ${con.connection.host}`)
    })
}

module.exports = connectDataBase