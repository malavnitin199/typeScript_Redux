import Card from "./Card";
import { GoalType } from "./Main";

function Section({ goals }: { goals: GoalType[] }) {
  return (
    <div>
      Section
      {goals?.map((goal: GoalType) => (
        <Card
          key={Math.random()}
          title={goal.title}
          discription={goal.discription}
        >
          {goal.title}
        </Card>
      ))}
    </div>
  );
}

export default Section;
