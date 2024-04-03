import "./app.css";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    // <div className="hero absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="">
      <Hero />
      <Profile />
      <Works />
      <Skill />
      <Contact />
    </div>
  );
}
