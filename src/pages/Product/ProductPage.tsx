import React, { FC, useState } from "react";

import { Navigator } from "components/";
import { SelectOption } from "components/Select";

import {
  ProductPageHeader,
  ProductPageBody,
  ProductPageFooter,
  ProductPageContainer,
  ProductPageRight,
  ProductPageLeft,
} from "./ProductPageLayout";
import {
  AddToCartButton,
  ProductColor,
  ProductNameComponent,
  ProductPrice,
  ProductTabContent,
  ProductTabSelector,
  ProductShowcaseMobile,
} from "./sections";

import { TabState } from "./sections/ProductPageHeader/ProductTabSelector";

interface ProductPageProps {
  productImages: { [key: string]: string };
  colorSelection: SelectOption[];
  defaultImage: string;
  description: string;
  oldPrice?: number;
  details: string;
  title: string;
  hint: string;
  price: number;
}

export const ProductPage: FC<ProductPageProps> = ({
  colorSelection,
  productImages,
  defaultImage,
  description,
  oldPrice,
  details,
  title,
  hint,
  price,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);
  const [tabState, setTabState] = useState<TabState>(TabState.DESCRIPTION);
  return (
    <ProductPageContainer>
      <ProductPageLeft>
        <ProductPageHeader>
          <Navigator title={"All products"} />
          <ProductNameComponent productName={title} hint={hint} />
          <ProductTabSelector
            onSelect={(activeTab: TabState) => setTabState(activeTab)}
          />
        </ProductPageHeader>

        <ProductPageBody>
          <ProductTabContent
            content={tabState === TabState.DESCRIPTION ? description : details}
          />
          <ProductPrice price={price} oldPrice={oldPrice} />
          <ProductColor
            label={"colors"}
            onChange={(selectedColor) =>
              setSelectedImage(productImages[selectedColor])
            }
            colors={colorSelection}
          />
          <ProductShowcaseMobile fileName={selectedImage} />
        </ProductPageBody>
        
        <ProductPageFooter>
          <AddToCartButton buttonLabel={"Add to Cart"} />
        </ProductPageFooter>
      </ProductPageLeft>
      <ProductPageRight>
        <img
          src={`images/${selectedImage}.jpg`}
          alt={selectedImage}
          width={"80%"}
          height={"auto"}
          loading="lazy"
        />
      </ProductPageRight>
    </ProductPageContainer>
  );
};
