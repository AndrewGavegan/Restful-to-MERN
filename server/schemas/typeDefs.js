const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
       bookID: ID
       authors: [String]
       description: String
       title: String
       image: String
       link: String
    }

    type User {
      userID: ID!
      username: String
      email: String 
      savedBooks: [Book]
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
      getSingleUser: User
    }

    input BookInfo {
      bookID: ID
      authors: [String]
      description: String
      title: String
      image: String
      link: String
    }
    
    type Mutation {
      createUser(username: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth
      saveBook(input: BookInfo!): User
      removeBook(bookId: String!): User
    }`;

module.exports = typeDefs;