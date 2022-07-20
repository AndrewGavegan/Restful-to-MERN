import { gql } from '@apollo/client';

export const getMe = gql`
query user {
    user {
        userID
        username
        email
        savedBooks {
            bookID
            authors
            description
            image
            link
            title
        }
    }
}`;