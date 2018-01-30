require('@google-cloud/debug-agent').start();

exports.helloWorld = function(req, res) {
  res.send("Hello, World");
}
