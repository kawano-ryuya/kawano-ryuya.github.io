"use client";
import { FadeInBottom } from "./FadeInBottom";
import Jump from "./Jump";

const Skill = () => {
  return (
    <div id="SKILL" className="w-screen h-screen flex-1">
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">SKILL</h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          error eos eveniet expedita dolorum enim voluptatem a eaque laudantium
          quidem consectetur, accusamus, iste molestiae fugiat dolore dolor
          accusantium iusto? Nemo.
        </p>
        <Jump content="CONTACT" />
      </FadeInBottom>
    </div>
  );
};

export default Skill;
