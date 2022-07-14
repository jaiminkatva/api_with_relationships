module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.STRING
        },
        publise: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false
    })
    return Post
}