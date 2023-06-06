import { Shopify } from "@shopify/shopify-api";

const Images = [
  "https://res.cloudinary.com/dqxvmbw8n/image/upload/v1685639779/cld-sample-5.jpg",
  "https://res.cloudinary.com/dqxvmbw8n/image/upload/v1685639778/cld-sample-4.jpg",
  "https://res.cloudinary.com/dqxvmbw8n/image/upload/v1685639778/cld-sample-3.jpg",
  "https://res.cloudinary.com/dqxvmbw8n/image/upload/v1685639777/cld-sample-2.jpg",
  "https://res.cloudinary.com/dqxvmbw8n/image/upload/v1685639776/cld-sample.jpg",
]

const ADJECTIVES = [
  "autumn",
  "hidden",
  "bitter",
  "misty",
  "silent",
  "empty",
  "dry",
  "dark",
  "summer",
  "icy",
  "delicate",
  "quiet",
  "white",
  "cool",
  "spring",
  "winter",
  "patient",
  "twilight",
  "dawn",
  "crimson",
  "wispy",
  "weathered",
  "blue",
  "billowing",
  "broken",
  "cold",
  "damp",
  "falling",
  "frosty",
  "green",
  "long",
]

const NOUNS = [
  "waterfall",
  "river",
  "breeze",
  "moon",
  "rain",
  "wind",
  "sea",
  "morning",
  "snow",
  "lake",
  "sunset",
  "pine",
  "shadow",
  "leaf",
  "dawn",
  "glitter",
  "forest",
  "hill",
  "cloud",
  "meadow",
  "sun",
  "glade",
  "bird",
  "brook",
  "butterfly",
  "bush",
  "dew",
  "dust",
  "field",
  "fire",
  "flower",
]

export const DEFAULT_PRODUCTS_COUNT = 15; 
const CREATE_PRODUCTS_MUTATION = `
  mutation populateProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
      }
    }
  }
`

export default async function productCreator(session, count = DEFAULT_PRODUCTS_COUNT) {
  const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);

  try {
    for (let i = 0; i < count; i++) {
      await client.query({
        data: {
          query: CREATE_PRODUCTS_MUTATION,
          variables: {
            input: {
              title: `${randomTitle()}`,
              variants: [{ price: randomPrice() }],
              images:[{src: randomImage()}],
              descriptionHtml:'Defaul Description.',
            },
          },
        },
      });
    }
  } catch (error) {
    if (error instanceof Shopify.Errors.GraphqlQueryError) {
      throw new Error(`${error.message}\n${JSON.stringify(error.response, null, 2)}`);
    } else {
      throw error;
    }
  }
}

function randomTitle() {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${adjective} ${noun}`;
}

function randomPrice() {
  return Math.round((Math.random() * 10 + Number.EPSILON) * 100) / 100;
}
function randomImage() {
  return Images[Math.floor(Math.random() * Images.length)];
} 