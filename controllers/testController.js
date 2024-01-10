const testController = (req, res) => {
  res.status(200).send({
    message: "test Welcome",
    success: true,
  });
};

module.exports = { testController };
