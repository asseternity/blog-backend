getIndex = (req, res) => {
  return res.send('Received a GET HTTP method');
};

postIndex = (req, res) => {
  return res.send('Received a POST HTTP method');
};

putIndex = (req, res) => {
  return res.send('Received a PUT HTTP method');
};

deleteIndex = (req, res) => {
  return res.send('Received a DELETE HTTP method');
};

module.exports = { getIndex, postIndex, putIndex, deleteIndex };
