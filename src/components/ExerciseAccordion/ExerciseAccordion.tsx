import { useState } from "react";

type Exercise = {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  image: string;
};

type Props = {
  exercises: Exercise[];
};

const ExerciseAccordion = ({ exercises }: Props) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="accordion">
      {exercises.map((exercise, index) => (
        <div key={exercise.id} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {exercise.name}
          </button>
          <div
            className={`accordion-content ${
              openIndices.includes(index) ? "open" : ""
            }`}
          >
            <p>
              <strong>Muscle Group:</strong> {exercise.muscleGroup}
            </p>
            <p>
              <strong>Equipment:</strong> {exercise.equipment}
            </p>
            <img src={exercise.image} alt={exercise.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseAccordion;
