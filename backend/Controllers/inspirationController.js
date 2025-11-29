const fs = require("fs");
const path = require("path");

const InspirationController = (req, res) => {
  const inspirationFile = path.join(__dirname, "../data/inspiration.json");

  const data = fs.existsSync(inspirationFile)
    ? JSON.parse(fs.readFileSync(inspirationFile))
    : [];

  res.json({ success: true, results: data });
};

module.exports = { InspirationController };
