const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle
        }
    }
)

// check database connection 
sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch(err => {
        console.log("Error " + err);
    })

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model define
db.post = require("./post")(sequelize, DataTypes)
db.comment = require("./comment")(sequelize, DataTypes)

// table sync
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Yes re-sync");
    })

// one to many relation ship
db.post.hasMany(db.comment, {
    foreignkey: 'postId',
    as: 'comment'
})

db.comment.belongsTo(db.post, {
    foreignkey: 'postId',
    as: 'post'
})

module.exports = db;
