const checkExtention = (fileName) => {
    const EXTENTIONS = ["txt", "js", "json", "html", "css"];

    const parts = fileName.toLowerCase().split(".");
    const fileExtension = parts[parts.length - 1];
    const result = EXTENTIONS.includes(fileExtension);

    return {fileExtension, result};
}

module.exports = checkExtention;