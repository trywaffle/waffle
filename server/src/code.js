const model = require("./model.js");
const emails = process.argv.slice(2);

model.ready(() => {
  for(let i = 0; i < emails.length; i++) {
    const email = emails[i];
    model.createCode((code) => {
      // TODO: Email user with code to sign up
    });
  }
});
