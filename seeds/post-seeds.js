const { Post } = require("../models");

const postData = [
  {
    title: "How did you find out about the bootcamp",
    post_content: "I was looking to expand my career and it came up as one of the suggestions.",
    user_id: 3,
  },
  {
    title: "Is anyone having trouble accessing their github?",
    post_content: "I thought I was logging in correctly, but I think I need to make a new account.",
    user_id: 1,
  },
  {
    title: "What are some good websites to learn javascript?",
    post_content: "I have been using edabit.com",
    user_id: 2,
  },
  {
    title: "What type of laptop are you using for coding?",
    post_content: "I've been using a macbook, looking to see if there's a better option.",
    user_id: 3,
  },
  {
    title: "Has anyone been looking at tech companies for jobs?",
    post_content: "I've been looking in the local market and advertising agencies.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
