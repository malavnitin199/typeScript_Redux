import Card from "./Card";
import { GoalType } from "./Main";

function Section({ goals }: { goals: GoalType[] }) {
  return (
    <div>
      {goals?.map((goal: GoalType) => (
        <Card
          key={Math.random()}
          title={goal.title}
          discription={goal.discription}
        ></Card>
      ))}
    </div>
  );
}

export default Section;
