import mongoose, { Mongoose } from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      validate: {
        validator: function (value) {
          const self = this;
          const errorMsg = "Email already in use!!";
          return new Promise((resolve, reject) => {
            self.constructor.findOne(
              {
                email: value,
              }
                .then((model) => {
                  model._id ? reject(new Error(errorMsg)) : resolve(true);
                })
                .catch((err) => resolve(true))
            );
          });
        },
      },
    },
    password: { type: String, require: true },
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("UserSchema", UserSchema);
