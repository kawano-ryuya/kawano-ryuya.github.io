import { FadeInBottom } from "./FadeInBottom";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div
      id="CONTACT"
      className="h-screen w-screen flex-1 bg-connect text-white"
    >
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">CONTACT</h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          inventore obcaecati laborum deserunt voluptatum sit pariatur minus
          beatae, nulla provident possimus, optio magnam nisi distinctio,
          numquam iusto. Voluptatem, consequatur illum!
        </p>
        <Button className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-connect-blue1 text-white inline-block">
          <span className="absolute top-0 left-0 w-0 h-full transition-all duration-200 ease-out transform translate-x-0 bg-white group-hover:w-full border-2 border-connect-blue1"></span>
          <span className="select-none relative group-hover:text-connect-blue1">
            CONTACT ME!
          </span>
        </Button>
      </FadeInBottom>
    </div>
  );
};

export default Contact;
