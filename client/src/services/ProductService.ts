import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ProductsDto } from "../../../backend/src/product/dto/products.dto"
import { apiUrl } from '@/api/api';

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache()
});

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

export const ProductService = {
  getProducts: async () => {
    const GET_PRODUCTS = gql`
      query GetProducts {
        products {
          id
          title
          price
          images
        }
      }
    `;
    const { data } = await client.query({ query: GET_PRODUCTS });
    return data;
  },

  getProduct: async (id: string) => {
    const GET_PRODUCT = gql`
      query GetProduct($id: ID!) {
        product(id: $id) {
          id
          title
          price
          images
        }
      }
    `;
    const { data } = await client.query({ query: GET_PRODUCT, variables: { id } });
    return data;
  },

  createProduct: async (dto: ProductsDto) => {
    const CREATE_PRODUCT = gql`
      mutation CreateProduct($dto: ProductsDto!) {
        createProduct(dto: $dto) {
          id
          title
          price
          images
        }
      }
    `;
    const { data } = await client.mutate({ mutation: CREATE_PRODUCT, variables: { dto } });
    return data;
  },
  updateProduct: async (id: string, dto: ProductsDto) => {
    const UPDATE_PRODUCT = gql`
      mutation UpdateProduct($id: ID!, $dto: ProductsDto!) {
        updateProduct(id: $id, dto: $dto) {
          id
          title
          price
          images
        }
      }
    `;
    const { data } = await client.mutate({ mutation: UPDATE_PRODUCT, variables: { id, dto } });
    return data;
  },
  deleteProduct: async (id: string): Promise<void> => {
    const DELETE_PRODUCT = gql`
      mutation DeleteProduct($id: ID!) {
        deleteProduct(id: $id)
      }
    `;
    await client.mutate({ mutation: DELETE_PRODUCT, variables: { id } });
  }
};