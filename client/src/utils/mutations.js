import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        userID
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        userID
        username
        email

      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($input: BookInfo!) {
  saveBook(input: $input) {
    userID
    username
    email
    savedBooks {
      bookID
      authors
      description 
      title 
      image 
      link 
    }
  }
}`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: String!) {
    removeBook(bookID: $bookID) {
      userID
      username
      email
      savedBooks {
      bookID
      authors
      description 
      title 
      image 
      link 
      }
    }
  }`;