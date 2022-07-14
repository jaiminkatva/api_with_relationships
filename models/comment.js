module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comment", {
        contant: {
            type: DataTypes.STRING
        },
        like: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false
    })
    return Comment
}