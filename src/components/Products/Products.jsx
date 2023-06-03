import React from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-grid" id="products">
      <div className="products-div">
        <h1>Produtos</h1>
        <p>
          A RainbowPiercing oferece uma seleção de piercings de alta qualidade
          para os amantes da moda e da expressão pessoal. Seus produtos são
          feitos com materiais duráveis e seguros, garantindo conforto e estilo
          em cada peça. Encontre o piercing perfeito para complementar o seu
          visual na RainbowPiercing.
        </p>
        <Product />
      </div>
    </div>
  );
};

export default Products;
