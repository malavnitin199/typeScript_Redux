import { type FC, type PropsWithChildren, type ReactNode } from "react";

//1(for tye children type method -1)
// interface Purpose {
//   title: string;
//   discription: string;
//   children: ReactNode;
// }

//2(for tye children type method -)
type Purpose = PropsWithChildren<{ title: string; discription: string }>;

//M#1
function Card({ title, discription, children }: Purpose) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{discription}</h1>
      {children}
      <button>delete</button>
    </div>
  );
}

//M#2
// const Card: FC<Purpose> = ({ title, discription, children }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h1>{discription}</h1>
//       {children}
//       <button>delete</button>
//     </div>
//   );
// };

export default Card;
