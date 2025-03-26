import gql from "graphql-tag";

export const typeDefs = gql`
    type Query {
        tracksForHome: [Track!]!
    }

    """
    Information about a track
    """
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;