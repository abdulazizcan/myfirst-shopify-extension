<<<<<<< HEAD
import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  TextField,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductCard, ProductsCard } from "../components";
import { useAppQuery } from "../hooks";
import { ProductList } from "../components/ProductList";

export default function HomePage() {
  const { data, isLoading, refetch, isRefetching } = useAppQuery({
    url: "/api/products",
  });
  console.log("data: ",data)
  return (
    <Page title="Dashboard | ADMIN">
      <Layout>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>

        <Layout.Section>
          <ProductList data={data} isLoading={isLoading} isRefetching={isRefetching} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
=======

import React from 'react';
import {HorizontalStack} from '@shopify/polaris';
import CustomSidebar from './CustomSidebar';


export default function HomePage() {
return (
<HorizontalStack wrap={false}>
  <CustomSidebar />
</HorizontalStack>
);
}


>>>>>>> a488cb48b870fe3020f5bde13277795c3ca8a518
