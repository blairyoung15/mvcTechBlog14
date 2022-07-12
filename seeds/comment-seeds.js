const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_text: "This is interesting!",
  },
  {
    user_id: 4,
    post_id: 1,
    comment_text: "I like what you did here.",
  },
  {
    user_id: 1,
    post_id: 3,
    comment_text: "Love all of the contributions.",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "Would you be able to share a demo?",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "Looking at the repo, this is a great addition!",
  },
  {
    user_id: 3,
    post_id: 1,
    comment_text:
      "Thanks for adding this feature, I've been waiting for it.",
  },
  {
    user_id: 3,
    post_id: 3,
    comment_text: "Can't wait to utilize this in my code",
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: "Thanks for sharing!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
