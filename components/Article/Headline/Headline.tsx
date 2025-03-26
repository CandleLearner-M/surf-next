import { ReactNode } from "react";

function Headline({ children, id }: { children: ReactNode; id: string }) {
  return (
    <h3 style={{ margin: "1.5rem" }} id={id}>
      {children}
    </h3>
  );
}
export default Headline;
