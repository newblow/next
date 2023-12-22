import React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import dbClient from "../connect/connect";
import CarsList from "../cars-list";

const getCars = async (): Promise<Car[]> => {
  const db = dbClient.db("cars");
  const results = db.collection<Car>("voiture").find();
  return (await results.toArray()).map((document) => ({
    name: document.name,
    make: document.make,
    color: document.color || "", // Fournir une valeur par défaut si la couleur est indéfinie
    km: document.km,
    year: document.year,
  }));
};

const Test: React.FC<{ data: Car[] }> = ({ data }) => {
  return (
    <>
    <CarsList cars={data}/>
     {data}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Car[] = await getCars();

  return {
    props: {
      data,
    },
    // Revalider toutes les 1 heure. Ajustez cette valeur en fonction de vos besoins.
    revalidate: 3600,
  };
};

export default Test;
