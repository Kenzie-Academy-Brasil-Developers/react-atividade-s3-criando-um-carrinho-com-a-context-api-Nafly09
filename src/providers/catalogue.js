import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    {
      name: "Book",
      price: 20,
      img: "https://www.kindpng.com/picc/m/249-2492126_open-book-cartoon-open-book-cartoon-png-transparent.png",
    },
    {
      name: "T-shirt",
      price: 50,
      img: "https://www.wsccontabilidade.com.br/wp-content/uploads/2019/01/tshirt-2.jpg",
    },
    {
      name: "Banana",
      price: 3,
      img: "https://en.pimg.jp/062/866/504/1/62866504.jpg",
    },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
