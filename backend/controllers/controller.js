const db = require("../models");
const Comment = db.comments;

//Create and save a new comment
exports.create = async (req, res) => {
	if (!req.body.comment) {
		res.status(400).send({
			message: "Cannot post an empty comment"
		})
	}

	try {
		const comment = {
			comment: req.body.comment
		};

		const response = await Comment.create(comment)

		res.send(response);	
	} catch {err => {
			res.status(500).send({
				message:
					err.message || "Something went wrong while creating your comment"
			});
		}};
};

//Retrieve all Comments from the DB
exports.findAll = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    
    res.send(comments);
  } catch {
    (err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving comments."
      });
    };
  };
}