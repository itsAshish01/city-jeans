export const COLLECTION_QUERY = `
query{
  collections{
    data{
      attributes{
        name
        shortDescription
        description
        price
        category
        slug
        instock
        type
        thumbnail{
          data{
            attributes{
              formats
            }
          }
        }
        images{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!){
    collections(filters: {slug: {eq: $slug}}){
      data{
        attributes{
          name
          shortDescription
          description
          price
          category
          slug
          instock
          type
          images{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
