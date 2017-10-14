const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

mongoose.Promise = Promise;

let readyCbs = [];
module.exports.ready = (cb) => {
  readyCbs.push(cb);
}

const connection = mongoose.connect("mongodb://localhost/waffle", {
  useMongoClient: true
});

connection.then((db) => {
  const codeSchema = Schema({
    code: String
  });

  const userSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    passwordHash: String,
    passwordSalt: String,
    createdCommunities: [{
      type: Schema.Types.ObjectId,
      ref: "Community"
    }],
    communities: [{
      type: Schema.Types.ObjectId,
      ref: "Community"
    }]
  });

  const communitySchema = Schema({
    name: String,
    authors: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    members: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
  });

  const Code = mongoose.model("Code", codeSchema);
  const User = mongoose.model("User", userSchema);
  const Community = mongoose.model("Community", communitySchema);

  module.exports.createCode = (cb) => {
    crypto.randomBytes(8, (err, buf) => {
      if(err) {
        console.error("Couldn't Generate Code");
      } else {
        const hex = buf.toString("hex");
        const newCode = new Code({
          code: hex
        });

        newCode.save((err) => {
          if(err) {
            console.error("Couldn't Save Code");
          } else {
            cb(hex);
          }
        });
      }
    });
  }

  module.exports.createUser = (code, name, email, password, cb) => {
    Code.findOne({
      code
    }, "code", (err, codeInstance) => {
      if(err) {
        console.error("Couldn't fetch code");
      } else {
        if(!codeInstance) {
          cb("invalid code");
        } else {
          Code.remove({
            code
          }, (err) => {
            if(err) {
              console.error("Couldn't remove code");
            } else {
              crypto.randomBytes(32, (err, buf) => {
                if(err) {
                  console.error("Couldn't Generate Salt");
                } else {
                  const salt = buf.toString("hex");

                  const newUser = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name,
                    email,
                    passwordHash: crypto.createHash("sha256").update(salt + password).digest("hex"),
                    passwordSalt: salt
                  });

                  newUser.save((err) => {
                    if(err) {
                      console.error("Couldn't Save User");
                    } else {
                      cb(null);
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  }

  for(let i = 0; i < readyCbs.length; i++) {
    readyCbs[i]();
  }
}).catch((err) => {
  console.error("Couldn't connect to database.", err);
});
