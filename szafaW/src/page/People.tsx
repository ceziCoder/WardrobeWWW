import { AnimatedTooltip } from "../components/animated-tooltip";
import img5 from "../assets/cezi.jpg";
import img6 from "../assets/user.png";

const people = [
  {
    id: 1,
    name: "Cezary -> Szef",
    designation: "Projektatnt 3d",
    image:
      img5,
  },
  {
    id: 2,
    name: "Pawel -> Zastepca",
    designation: "",
    image:
      img6,
  },

]


export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}