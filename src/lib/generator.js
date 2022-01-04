module.exports = {
  create: (path) => {
    const inquirer = require("inquirer");
    const fs = require("fs");
    fs.readdir(path, (err, files) => {
      let files_num;
      files.forEach((file) => {
        console.log(file);
        files_num++;
      });

      inquirer
        .prompt([
          {
            name: "name",
            message: "name:",
          },
          {
            name: "symbol",
            message: "symbol:",
          },
          {
            name: "fee",
            message: "seller_fee_basis_points:",
          },
          {
            name: "path",
            message: "path to your assets:",
          },
        ])
        .then((answers) => {
          fs.mkdir("./assets", () => {
            for (let i = 0; i < 5; i++) {
              fs.writeFile(`./assets/${i}.json`, answers.name, function (err) {
                if (err) throw err;
                console.log("Saved!");
              });
            }
          });
        });
    });
  },
};
