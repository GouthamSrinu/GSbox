import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <div>
      <Badge fontSize="14px" borderRadius="4px" colorScheme={color}>
        {score}
      </Badge>
    </div>
  );
};
export default CriticScore;
