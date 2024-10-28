import Navar from "@/components/Navar";
import { Children } from "react";

export default function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
<main>


<Navar></Navar>





    

      {children}
   
    </main>
    </>
  );
}
