import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
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