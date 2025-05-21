import { useGetAllExercises } from "../api/exercise/useGetAllExercises";
import ExerciseList from "../components/Exercises/ExerciseList/ExerciseList";
import ExerciseListHeader from "../components/Exercises/ExerciseList/ExerciseListHeader/ExerciseListHeader";
import ExerciseFilter from "../components/Exercises/ExerciseFilter/ExerciseFilter";
import { useState, useMemo } from "react";
import { Exercise, MuscleInfo } from "../types/types";
import { Equipment, EquipmentOptions } from "../data/Equipment";
import { FitnessLevel, FitnessLevelOptions } from "../data/FitnessLevel";
import { MuscleGroup } from "../types/MuscleGroup";
import { useGetAllMuscleGroups } from "../api/muscleGroup/useGetAllMuscleGroups";

interface MuscleGroups {
  chest: boolean;
  back: boolean;
  legs: boolean;
  shoulders: boolean;
  arms: boolean;
  abdominals: boolean;
}

interface EquipmentFilter {
  barbell: boolean;
  dumbbell: boolean;
  bodyweight: boolean;
  machine: boolean;
  cardio: boolean;
  kettlebell: boolean;
}

interface DifficultyFilter {
  beginner: boolean;
  intermediate: boolean;
  expert: boolean;
}

interface Filters {
  muscleGroups: MuscleGroups;
  equipment: EquipmentFilter;
  difficulty: DifficultyFilter;
}
const initialFilterState: Filters = {
  muscleGroups: {
    chest: false,
    back: false,
    legs: false,
    shoulders: false,
    arms: false,
    abdominals: false,
  },
  equipment: {
    barbell: false,
    dumbbell: false,
    bodyweight: false,
    machine: false,
    cardio: false,
    kettlebell: false,
  },
  difficulty: {
    beginner: false,
    intermediate: false,
    expert: false,
  },
};

const ExercisePage = () => {
  const { data: exercises } = useGetAllExercises();

  const [tempSliderValue, setTempSliderValue] = useState<number>(83);
  const [tempSearch, setTempSearch] = useState<string>("");
  const [tempFilters, setTempFilters] = useState<Filters>(initialFilterState);

  const [sliderValue, setSliderValue] = useState<number>(83);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<Filters>(initialFilterState);

  const handleApplyFilters = () => {
    console.log("cliked");
    setSliderValue(tempSliderValue);
    setSearch(tempSearch);
    setFilters(tempFilters);
  };
  const handleResetFilters = () => {
    console.log("cliked");
    setTempSliderValue(100);
    setTempSearch("");
    setTempFilters(initialFilterState);
    console.log("cliked");
  };
  const { data: muscleGroups } = useGetAllMuscleGroups();

  const filteredExercises = useMemo(() => {
    if (!exercises) {
      return [];
    }

    const getEquipmentLabel = (value: Equipment): string | undefined => {
      const option = EquipmentOptions.find((opt) => opt.value === value);
      return option?.label.toLowerCase();
    };

    const getDifficultyLabel = (value: FitnessLevel): string | undefined => {
      const option = FitnessLevelOptions.find((opt) => opt.value === value);
      return option?.label.toLowerCase();
    };

    const activeMuscleGroups = Object.entries(filters.muscleGroups)
      .filter(([, isActive]) => isActive)
      .map(([name]) => name.toLowerCase());

    const activeMG = muscleGroups?.filter((muscleGroup) =>
      activeMuscleGroups.includes(muscleGroup.name.toLowerCase())
    );
    console.log(activeMG);

    const activeEquipment = Object.entries(filters.equipment)
      .filter(([, isActive]) => isActive)
      .map(([name]) => name.toLowerCase());

    const activeDifficulty = Object.entries(filters.difficulty)
      .filter(([, isActive]) => isActive)
      .map(([name]) => name.toLowerCase());

    return exercises
      .filter((exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((exercise) => {
        if (activeMG?.length === 0) return true;
        return exercise.muscles.some((muscleInfo) =>
          activeMG?.some((active) => {
            const names =
              active.muscles.map((muscle) => muscle.name.toLowerCase()) || [];

            console.log(names);
            console.log(muscleInfo.name);
            return names.includes(muscleInfo.name.toLowerCase());
          })
        );
      })
      .filter((exercise) => {
        if (activeEquipment.length === 0) return true;
        const equipmentLabel = getEquipmentLabel(exercise.equipment);
        if (!equipmentLabel) return false;
        return activeEquipment.includes(equipmentLabel);
      })
      .filter((exercise) => {
        if (activeDifficulty.length === 0) return true;
        const difficultyLabel = getDifficultyLabel(exercise.difficulty);
        if (!difficultyLabel) return false;

        return activeDifficulty.includes(difficultyLabel);
      })

      .filter((exercise) => exercise.secondsPerSet <= sliderValue)

      .map((exercise) => ({
        ...exercise,

        imagePath: `${import.meta.env.VITE_BASE_IMAGES || ""}${
          exercise.imagePath
        }`,
      }));
  }, [exercises, search, filters, sliderValue]);
  return (
    <>
      <ExerciseListHeader />
      <ExerciseFilter
        search={tempSearch}
        setSearch={setTempSearch}
        sliderValue={tempSliderValue}
        setSliderValue={setTempSliderValue}
        filters={tempFilters}
        setFilters={setTempFilters}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />
      <ExerciseList exercises={filteredExercises} />
    </>
  );
};

export default ExercisePage;
