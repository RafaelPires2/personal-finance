import { ContainerCardAdvantages } from "./styles";

interface CardAdvantagesProps {
  icon: string;
  title: string;
  paragraph: string;
}

export function CardAdvantages({
  icon,
  title,
  paragraph,
}: CardAdvantagesProps) {
  return (
    <ContainerCardAdvantages>
      <div>
        <img src={icon} alt="" />
        <h2>{title}</h2>
        <p>{paragraph}</p>

        {/* <a href="https://google.com">What this?</a> */}
      </div>
    </ContainerCardAdvantages>
  );
}
