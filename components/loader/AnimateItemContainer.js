import AnimateItem from "./AnimateItem";
import { moveDown, moveUp } from "./utils/anim";

export default function AnimateItemContainer() {
  return (
    <>
      {Array.from({ length: 15 }, (_, index) => (
        <>
          <AnimateItem key={index} delay={index * 0.1} variants={moveUp} />
          <AnimateItem key={index} delay={index * 0.1} variants={moveDown} />
        </>
      ))}
    </>
  );
}
