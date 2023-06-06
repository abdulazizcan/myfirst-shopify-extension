import {
  Button,
  Card,
  Collapsible,
  FormLayout,
  Stack,
  TextField,
} from "@shopify/polaris";
import { useState } from "react";
import { Variants } from "./Variants";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
import { useNavigate } from "@shopify/app-bridge-react";

export const ProductCard = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [showVariants, setShowVariants] = useState(true);
  const [variants, setVariants] = useState(props.variants);
  const fetch = useAuthenticatedFetch();
  const navigate = useNavigate();

  const onUpdate = async () => {
    const updatedProduct = {
      id: props.id,
      title,
      description,
      variants,
    };
    const response = await fetch("/api/products/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    if (response.ok) {
      console.log("Success!");
    }
  };

  const updateVariant = (id, price) => {
    setVariants((prev) => {
      const updatedVariants = prev.map((variant) => {
        if (id === variant.id) {
          return { ...variant, price };
        }
        return variant;
      });
      return updatedVariants;
    });
  };
  return (
    <Card
      sectioned
      primaryFooterAction={{
        content: "Update Product",
        onAction: onUpdate,
      }}
      secondaryFooterActions={[
        {
          content: "View in Admin",
          onAction: () =>
          navigate(
            { name: "Product", resource: { id: props.legacyId } },
            { target: "new" }
          ),
        },
      ]}
    >
      <Stack spacing="extraLoose">
        <Stack.Item>
          <img src={props.image} style={{ width: "320px", height: "230px" }} />
        </Stack.Item>
        <Stack.Item fill>
          <FormLayout>
            <TextField
              label="Product Title"
              value={title}
              onChange={setTitle}
            ></TextField>
            <TextField
              label="Product Description"
              multiline={5}
              value={description}
              onChange={setDescription}
            ></TextField>
            <Button onClick={() => setShowVariants((prev) => !prev)}>
              Show Variants
            </Button>
            <Collapsible open={showVariants}>
              <Variants variants={variants} updateVariant={updateVariant} />
            </Collapsible>
          </FormLayout>
        </Stack.Item>
      </Stack>
    </Card>
  );
};
