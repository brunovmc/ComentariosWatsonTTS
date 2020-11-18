module.exports = (sequelize, Sequelize) => {
	const Comment = sequelize.define("comment", {
		comment: {
			type: Sequelize.STRING
		}
	});

	return Comment;
};
