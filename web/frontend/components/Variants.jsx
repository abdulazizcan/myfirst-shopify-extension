import { Card, IndexTable, TextField } from "@shopify/polaris";

export const Variants = ({ variants, updateVariant }) => {
  return (
    <Card sectioned title="Variants">
      <IndexTable
        itemCount={variants.length}
        resourceName={{ singular: "variant", plural: "variants" }}
        headings={[{ title: "Variant" }, { title: "Price" }]}
        selectable={false}
      >
        {variants.map((variant) => (
          <IndexTable.Row key={variant.title}>
            <IndexTable.Cell>
              <TextField
                value={variant.title}
                disabled
                readOnly
                label="Variant"
                labelHidden
              />
            </IndexTable.Cell>
            <IndexTable.Cell>
              <TextField
                value={variant.price}
                label="Price"
                labelHidden
                type="number"
                prefix="$"
                onChange={(price) => updateVariant(variant.id, price)}
              />
            </IndexTable.Cell>

          </IndexTable.Row>
        ))}
      </IndexTable>
    </Card>
  );
};
