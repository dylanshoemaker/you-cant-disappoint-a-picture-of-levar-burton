const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {

  Query: {
    users: async () => {
    return;
    }
  },

  Mutation: {
    addusers: async () => {
      return;
      }
  },



};
module.exports = resolvers;