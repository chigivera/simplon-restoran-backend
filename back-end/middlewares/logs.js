const fs = require("fs")
const path = require("path")
const logData = (req, res, next) => {
  const cwd = process.cwd();

  const logFilePath = path.resolve(cwd, "logs", "restaurant_logs.txt");

  const logMessage = `[${new Date().toISOString()}], ${req.method}, ${
    req.url
  },  ${req.headers["user-agent"]}, ${req.ip}, ${res.statusCode}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file : ", err);
    }
  });

  next();
};

module.exports = { logData };