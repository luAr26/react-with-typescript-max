import { FormEvent, useRef } from "react";

interface NewGoalProps {
  onAdd: (text: string, summary: string) => void;
}

const NewGoal = ({ onAdd }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;
    // Validation...
    onAdd(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input type='text' id='goal' ref={goalRef} />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input type='text' id='summary' ref={summaryRef} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
