import React, { useState } from "react";

const list = [
  {
    name: "Titânio",
    description:
      "Piercings de titânio são populares por serem duráveis e hipoalergênicos. São feitos de um metal resistente à corrosão. São uma opção segura para quem tem sensibilidade a outros metais.",

    imagens: [
      "https://i.ibb.co/HV3Z5xz/image.png",
      "https://i.ibb.co/dfWLHqW/image.png",
    ],
  },
  {
    name: "Prata",
    description:
      "O piercing de prata é uma joia corporal elegante e versátil. É uma escolha popular para quem busca um acessório moderno e sofisticado. Extremamente duradouro",
    imagens: [
      "https://i.ibb.co/P1BpkV8/350238045-989853022036059-7048192525351636862-n.jpg",
      "https://i.ibb.co/hC2Q6Xc/image.png",
    ],
  },
  {
    name: "Ouro",
    description:
      "Esse tipo de piercing oferece durabilidade e brilho. Sua superfície lisa e polida proporciona conforto durante o uso, além de ser hipoalergênico para muitas pessoas. É uma escolha para quem busca adicionar um toque de luxo e glamour à sua aparência.",
  },
];

const Product = () => {
  return (
    <div>
      {list.map(({ name, description, imagens }, index) => (
        <details key={index} className="products-details">
          <summary>{name}</summary>
          <p>{description}</p>
          {imagens?.map((imagem, index) => (
            <img src={imagem} key={index} className="products-details-img" />
          ))}
        </details>
      ))}
    </div>
  );
};

export default Product;
