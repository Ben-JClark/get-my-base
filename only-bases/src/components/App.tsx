import { useEffect, useState } from "react";
import BaseCard from "./BaseCard";

type Base = {
  id: string;
  title: string;
  creator: string;
  rockets: number;
  exploits: boolean;
};

function App() {
  const [bases, setBases] = useState<Base[] | null>(null);

  // useEffect will only run once when App() component is first initialised
  useEffect(() => {
    async function fetchBases() {
      // TODO: handle errors
      fetch("./bases.json")
        .then((res) => res.json())
        .then((data) => setBases(data) /* ERROR doesn't pass propertly */);
    }

    fetchBases();
  }, []);

  return (
    <>
      {bases?.forEach((base: Base) => {
        <BaseCard
          id={base.id}
          title={base.title}
          creator={base.creator}
          rockets={base.rockets}
          exploits={base.exploits}
        ></BaseCard>;
      })}
    </>
  );
}

export default App;
