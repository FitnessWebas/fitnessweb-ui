import { MuscleGroup } from './MuscleGroup';
import {Goal } from '../data/Goal';
import {FitnessLevel } from '../data/FitnessLevel';
import {Equipment } from '../data/Equipment';

export interface GenerateWorkout {
  userId: string;
  name: string;
  targetDurationMinutes: number;
  goal: Goal; 
  difficulty: FitnessLevel; 
  equipment: Equipment[];
  muscleGroups: string[]; 
}
