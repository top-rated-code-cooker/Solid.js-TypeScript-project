export const GROUPS_QUERY = `
  query {
    groups {
      id
      name
      description
      members {
        id
        userId
        groupId
        role
        status
      }
      featuredImage
      visibility
    }
  }
`;
