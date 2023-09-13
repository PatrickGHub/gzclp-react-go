interface ExerciseSetupCardProps {
  workoutNumber: number
  workoutOptionsT1: string[]
  workoutOptionsT2: string[]
  workoutOptionsT3: string[]
}

export const ExerciseSetupCard = ({
  workoutNumber,
  workoutOptionsT1,
  workoutOptionsT2,
  workoutOptionsT3,
}: ExerciseSetupCardProps) => {
  return (
    <>
      <div className='border-2 border-solid border-black my-4'>
        <h2 className='text-lg font-bold'>Workout {workoutNumber}</h2>
        <div>
            <label htmlFor={`workout${workoutNumber}T1`}>T1</label>

            <select name='' id={`workout${workoutNumber}T1`}>
              {workoutOptionsT1.map((option) => (
                <option key={`workout${workoutNumber}T1${option}`} value={option}>{ option }</option>
              ))}
            </select>
        </div>

        <div>
          <label htmlFor={`workout${workoutNumber}T2`}>T2</label>

          <select name='' id={`workout${workoutNumber}T2`}>
            {workoutOptionsT2.map((option) => (
              <option key={`workout${workoutNumber}T2${option}`} value={option}>{ option }</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`workout${workoutNumber}T3`}>T3</label>

          <select name='' id={`workout${workoutNumber}T3`}>
            {workoutOptionsT3.map((option) => (
              <option key={`workout${workoutNumber}T3${option}`} value={option}>{ option }</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}