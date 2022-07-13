module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comment", {
        contant: {
            type: DataTypes.STRING
        },
        like: {
            type: DataTypes.STRING
        },
        post_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    })
    return Comment
}