function createToDoValidator(req, res, next) {
  if (!req.body.todoText) {
    return res.json({
      msg: `Invalid request`,
    });
  }

  // if you are sending everything req
  next();
}
module.exports = {
  createToDoValidator,
};
