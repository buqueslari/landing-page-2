import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Products1 from "@/components/products/Products1";
import React from "react";

export async function generateMetadata() {
  return {
    title: `Todos Produtos || Mundo Das Flores`,
    description: `Veja Todos os Produtos da Mundo Das Flores.`,
  };
}

export default async function page() {
  return (
    <>
      <Header2 />
      <Products1 />
      <Footer1 />
    </>
  );
}
