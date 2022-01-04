module.exports = {
  show: (text,color) => {
    const figlet = require("figlet");
    figlet(text, function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
  },
};
