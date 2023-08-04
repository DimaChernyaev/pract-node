const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const dataValidate = require("./helpers/dataValidator");
const checkExtention = require("./helpers/checkExtention");

const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };

  const validate = dataValidate(file);

  if (validate.error) {
    console.log(
      chalk.red(
        `Please, spicify ${validate.error.details[0].context.label} params`
      )
    );
    return;
  }

  const includes = checkExtention(fileName);

  if (!includes.result) {
    console.log(
      chalk.red(
        `Sorry, this aplication does not support ${includes.fileExtension} extentions`
      )
    );
    return;
  }
};

module.exports = {
  createFile,
};
