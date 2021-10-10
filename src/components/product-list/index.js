import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";

import { CartContext } from "../../providers/cart";

import { Card, Picture } from "./styles";

const ProductsList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <ul>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <Card key={index}>
            {item.name} <Picture src={item.img} alt={`${item.name}`} />
            <Button type={type} item={item} />
          </Card>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <Card key={index}>
            {item.name}
            <Picture src={item.img} alt={`${item.name}`} />
            <Button type={type} item={item} />
          </Card>
        ))}
    </ul>
  );
};

export default ProductsList;
