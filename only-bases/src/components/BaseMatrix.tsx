import { useEffect, useState } from "react";
import BaseCard from "./BaseCard";

type Base = {
  id: string;
  title: string;
  creator: string;
  rockets: number;
  exploits: boolean;
};

/**
 * @returns A matrix of base cards
 */
function BaseGrid() {
  const [bases, setBases] = useState<Base[] | null>(null);

  useEffect(() => {
    async function fetchBases() {
      // Fetch the array of base objects from ./bases.json
      const response = await fetch("./bases.json");
      if (response.ok) {
        const data: Base[] = await response.json();
        setBases(data);
      } else {
        console.log(response);
      }
    }

    fetchBases();
  }, []);

  return (
    <>
      {/* Return an array of base cards that are in bases */}
      {bases?.map((base: Base) => {
        return (
          <BaseCard
            key={base.id} // Unique key
            id={base.id}
            title={base.title}
            creator={base.creator}
            rockets={base.rockets}
            exploits={base.exploits}
          ></BaseCard>
        );
      })}
    </>
  );
}

export default BaseGrid;
