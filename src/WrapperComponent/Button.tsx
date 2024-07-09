import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;
type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") {
    return <a {...props}></a>;
  }
  return <a>Button</a>;
}

export default Button;
