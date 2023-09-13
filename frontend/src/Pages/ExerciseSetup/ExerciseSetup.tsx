import { ExerciseSetupCard } from '../../Components'

const exerciseOptions = {
  'abs': [
    'Ab Machine',
    'Cable Crunch',
    'Cable Twists (Down Up)',
    'Cable Twists (Up Down)',
    'Hanging Knee Raise',
    'Lying Leg Raise',
    'Weighted Crunches',
  ],
  'benchT3': [
    'Chest Flyes (Dumbbell)',
    'Upper Chest Fly (Cables)',
    'Chest Press (Machine)',
    'Dips',
    'Lying Tricep Extensions (Barbell)',
    'Lying Tricep Extensions (Dumbbell)',
    'Tricep Extension (Machine)',
    'Tricep Pushdowns (Cables)',
    'Tricep Pushdowns (Rope)',
  ],
  'biceps': [
    'Bicep Curl (Barbell)',
    'Bicep Curl (Cables)',
    'Bicep Curl (Dumbbell)',
    'Bicep Curl (Machine)',
    'Concentration Curl (Dumbbell)',
    'Hammer Curl (Dumbbell)',
    'Preacher Curl (Barbell)',
    'Preacher Curl (Dumbbell)',
    'Rope Curl (Cables)',
  ],
  'calves': [
    'Calf Raise on Leg Press Machine',
    'Standing Calf Raise',
  ],
  'chest': [
    'Chest Flyes (Cables)',
    'Chest Flyes (Dumbbell)',
    'Upper Chest Fly (Cables)',
    'Chest Press (Machine)',
    'Dips',
    'Flat Bench Press (Barbell)',
    'Flat Bench Press (Dumbbell)',
    'Flat Bench Press (Smith Machine)',
  ],
  'deadliftT3': [
    'Good Morning (Barbell)',
    'Hip Thrusts (Barbell)',
    'Single Leg Deadlift',
    'Rope Pull Through (Cables)',
    'Standing Leg Curl (Cables)',
    'Single Leg Hip Thrust (Dumbbell)',
    'Weighted Hyperextensions',
    'Leg Curl (Machine)',
    'Lying Leg Curl (Cables)',
    'Good Morning (Barbell)',
    'Hip Thrusts (Barbell)',
    'Shrugs',
    'Bicep Curl (Barbell)',
    'Bicep Curl (Cables)',
    'Bicep Curl (Dumbbell)',
    'Bicep Curl (Machine)',
    'Concentration Curl (Dumbbell)',
    'Hammer Curl (Dumbbell)',
    'Preacher Curl (Barbell)',
    'Preacher Curl (Dumbbell)',
    'Rope Curl (Cables)',
  ],
  'hamstringsGlutes': [
    'Rope Pull Through (Cables)',
    'Standing Leg Curl (Cables)',
    'Single Leg Hip Thrust (Dumbbell)',
    'Weighted Hyperextensions',
    'Leg Curl (Machine)',
    'Lying Leg Curl (Cables)',
    'Good Morning (Barbell)',
    'Hip Thrusts (Barbell)',
  ],
  'hipHinge': [
    'Conventional Deadlift (Barbell)',
    'Sumo Deadlift (Barbell)',
    'Romanian Deadlift (Barbell)',
    'Romanian Deadlift (Dumbbell)',
    'Good Morning (Barbell)',
    'Hip Thrusts (Barbell)',
    'Single Leg Deadlift',
  ],
  'horizontalPull': [
    'Bent Over Row (Barbell)',
    'Bent Over Row (Dumbbell)',
    'Bent Over Row (Smith Machine)',
    'Seated Row (Cables)',
    'Seated Row (Machine)',
  ],
  'horizontalPush': [
    'Chest Press (Machine)',
    'Flat Bench Press (Barbell)',
    'Flat Bench Press (Dumbbell)',
    'Flat Bench Press (Smith Machine)',
  ],
  'inclinePush': [
    'Incline Bench Press (Barbell)',
    'Incline Bench Press (Dumbbell)',
    'Incline Bench Press (Smith Machine)',
    'Incline Chest Press (Machine)',
  ],
  'ohpT3': [
    'Lateral Raises (Cables)',
    'Lateral Raises (Dumbbell)',
    'Rear Delt Fly (Cables)',
    'Rear Delt Fly (Dumbbell)',
    'Rear Delt Fly (Machine)',
    'Upright Row (Barbell)',
    'Upright Row (Cables)',
    'Upright Row (Dumbbell)',
  ],
  'quads': [
    'Leg Extension (Machine)',
    'Bulgarian Split Squat',
    'Goblet Squat',
    'Leg Press (Machine)',
    'Split Squats',
    'Weighted Lunges',
    'Weighted Step Ups',
  ],
  'shoulders': [
    'Lateral Raises (Cables)',
    'Lateral Raises (Dumbbell)',
    'Rear Delt Fly (Cables)',
    'Rear Delt Fly (Dumbbell)',
    'Rear Delt Fly (Machine)',
    'Upright Row (Barbell)',
    'Upright Row (Cables)',
    'Upright Row (Dumbbell)',
  ],
  'squat': [
    'Squat (Barbell)',
    'Squat (Smith Machine)',
    'Front Squat (Barbell)',
    'Hack Squat (Machine)',
    'Leg Press (Machine)',
  ],
  'squatT3': [
    'Leg Extension (Machine)',
    'Bulgarian Split Squat',
    'Goblet Squat',
    'Leg Press (Machine)',
    'Hack Squat (Machine)',
    'Split Squats',
    'Weighted Lunges',
    'Weighted Step Ups',
    'Ab Machine',
    'Cable Crunch',
    'Cable Twists (Down Up)',
    'Cable Twists (Up Down)',
    'Hanging Knee Raise',
    'Lying Leg Raise',
    'Weighted Crunches',
    'Calf Raise on Leg Press Machine',
    'Standing Calf Raise',
  ],
  'traps': [
    'Shrugs',
  ],
  'triceps': [
    'Lying Tricep Extensions (Barbell)',
    'Lying Tricep Extensions (Dumbbell)',
    'Tricep Extension (Machine)',
    'Tricep Pushdowns (Cables)',
    'Tricep Pushdowns (Rope)',
  ],
  'verticalPull': [
    'Assisted Chinup (Machine)',
    'Assisted Neutral Grip Pullup',
    'Assisted Pullup (Machine)',
    'Chinup',
    'Lat Pulldown',
    'Neutral Grip Pulldown',
    'Neutral Grip Pullup',
    'Pullup',
    'Underhand Pulldown',
  ],
  'verticalPush': [
    'Shoulder Press (Barbell)',
    'Shoulder Press (Dumbbell)',
    'Shoulder Press (Machine)',
  ]
}

export const ExerciseSetup = () => (
  <>
    <h1>ExerciseSetup</h1>

    <ExerciseSetupCard
      workoutNumber={1}
      workoutOptionsT1={exerciseOptions.squat}
      workoutOptionsT2={[...exerciseOptions.horizontalPush, ...exerciseOptions.inclinePush]}
      workoutOptionsT3={exerciseOptions.verticalPull}
    />

    <ExerciseSetupCard
      workoutNumber={2}
      workoutOptionsT1={exerciseOptions.verticalPush}
      workoutOptionsT2={exerciseOptions.hipHinge}
      workoutOptionsT3={exerciseOptions.horizontalPull}
    />

    <ExerciseSetupCard
      workoutNumber={3}
      workoutOptionsT1={exerciseOptions.horizontalPush}
      workoutOptionsT2={[...exerciseOptions.squat, ...exerciseOptions.quads]}
      workoutOptionsT3={exerciseOptions.verticalPull}
    />

    <ExerciseSetupCard
      workoutNumber={4}
      workoutOptionsT1={exerciseOptions.hipHinge.slice(0, 4)}
      workoutOptionsT2={[...exerciseOptions.inclinePush, ...exerciseOptions.verticalPush]}
      workoutOptionsT3={exerciseOptions.horizontalPull}
    />
  </>
)