"use client";
import { FadeInBottom } from "./FadeInBottom";
import Jump from "./Jump";

const Works = () => {
  return (
    <div id="WORKS" className="h-screen w-screen flex-1 bg-connect text-white">
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">WORKS</h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          inventore obcaecati laborum deserunt voluptatum sit pariatur minus
          beatae, nulla provident possimus, optio magnam nisi distinctio,
          numquam iusto. Voluptatem, consequatur illum!
        </p>
        <Jump content="SKILL" />
      </FadeInBottom>
    </div>
  );
};

export default Works;
