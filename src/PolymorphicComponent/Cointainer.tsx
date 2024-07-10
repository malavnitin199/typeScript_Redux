import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// type Containerprops = {
//   as: ElementType;
//   children: ReactNode;
// };

type Containerprops<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Cointainer<C extends ElementType>({
  as,
  children,
  ...props
}: Containerprops<C>) {
  const Componet = as || "div";
  return <Componet {...props}>{children}</Componet>;
}

export default Cointainer;



   {/* <Cointainer as="button">button from Polymorphic Componet </Cointainer> */}