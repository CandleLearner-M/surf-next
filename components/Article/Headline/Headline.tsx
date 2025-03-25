import { ReactNode } from "react";

function Headline({ children }: { children: ReactNode }) {
  return <h3 style={{margin: '1.5rem'}}>{children}</h3>;
}
export default Headline;
