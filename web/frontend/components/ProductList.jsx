import { Button, Card, EmptyState, Layout, Spinner, TextField } from "@shopify/polaris";
import { ProductCard } from "./ProductCard";
import {react, useState} from 'react'
export const ProductList = ({ data, isLoading, isRefetching }) => {
const [count, setCount] = useState(10000);

  
  if (isLoading || isRefetching) {

    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout >
      {data?.product.length
        ? data.product.map((product) => (
            <Layout.Section key={product.id}>
                              <ProductCard {...product} />
                              <Card>
                              <TextField  value={count}>
                              </TextField>
                              <Button onClick={() => setCount(count - 1)}>-</Button>
                              <Button onClick={() => setCount(count + 1)}>+</Button>
                              </Card>
            </Layout.Section>
          ))
        : (
            <Layout.Section>
                <Card>
                    <EmptyState heading="No Products Found" image=""></EmptyState>
                    <p>Add an a product using the card above</p>
                </Card>
            </Layout.Section>
        )}
    </Layout>
  );
};
