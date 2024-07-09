import { type FormEvent, useRef, type ReactNode } from "react";
import { GoalType } from "./Main";
type HeaderProp = {
  image: {
    img: string;
    alt: string;
  };
  AddGoal: (newdata: GoalType) => void;
  children: ReactNode;
};
const imgStyle = {
  height: "50px",
  width: "50px",
};
const inp: { width: string; heigth: string } = {
  width: "220px",
  heigth: "50px",
};
function Header({ image, AddGoal, children }: HeaderProp) {
  const title = useRef<HTMLInputElement>(null);
  const goal = useRef<HTMLInputElement>(null);
  function hadleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredtitle = title.current!.value;

    if (!enteredGoal || !enteredtitle) {
      return;
    }
    AddGoal({
      id: Math.random(),
      title: enteredGoal,
      discription: enteredtitle,
    });
    goal.current!.value = "";
    title.current!.value = "";
  }
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img style={imgStyle} src={image.img} alt={image.alt} />
      </div>
      {children}

      <form onSubmit={hadleSubmit}>
        <p style={inp}>
          <label htmlFor="goal">Your Goal</label>
          <input id="goal" type="text" ref={goal} />
        </p>
        <p style={inp}>
          <label htmlFor="discription">Goal discription</label>
          <input id="title" type="text" ref={title} />
        </p>
        <button>Add Me</button>
      </form>
    </div>
  );
}

export default Header;
