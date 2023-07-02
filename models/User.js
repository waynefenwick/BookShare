
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
// Create our User model 
class User extends Model {
<<<<<<< Updated upstream
 // set up method to run on instance data (per user) to check password
=======
  // set up method to run on instance data (per user) to check password
>>>>>>> Stashed changes
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
// define table columns and configuration 
User.init(
  {

    id: {
<<<<<<< Updated upstream
      
      type: DataTypes.INTEGER,
      
      allowNull: false,
      
      primaryKey: true,
      
      autoIncrement: true,
    },
    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

=======

      type: DataTypes.INTEGER,

      allowNull: false,

      primaryKey: true,

      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,

      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

>>>>>>> Stashed changes
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    
    sequelize,
    
    timestamps: false,
  
    freezeTableName: true,
    
    underscored: true,

<<<<<<< Updated upstream
=======
    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

>>>>>>> Stashed changes
    modelName: "user",
  }
);

module.exports = User;