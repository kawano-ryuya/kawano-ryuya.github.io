"use client";
import Back from "./Back";
import { FadeInBottom } from "./FadeInBottom";
import Footer from "./Footer";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div
      id="CONTACT"
      className="h-[calc(100vh-90px)] w-screen flex-1 bg-connect text-white relative"
    >
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">CONTACT</h2>
        <div className="container">
          <p className="py-4 flex justify-center text-2xl">
            制作の依頼・ご相談などお気軽にお問い合わせください。
          </p>
          <div className=" flex justify-center mt-10">
            <Button className=" px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-connect-blue1 text-white inline-block">
              <span className="absolute top-0 left-0 w-0 h-full transition-all duration-200 ease-out transform translate-x-0 bg-white group-hover:w-full border-2 border-connect-blue1"></span>
              <a
                href="mailto:kawano.ryuya@jp.panasonic.com"
                className="select-none relative group-hover:text-connect-blue1"
              >
                CONTACT ME!
              </a>
            </Button>
          </div>
          <Back content="HERO" />
        </div>
      </FadeInBottom>
      <Footer />
    </div>
  );
};

export default Contact;
