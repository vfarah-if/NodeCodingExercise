export class MorningRoutineResolver {
  public remindMeTo(dateTime: Date): string {
    if (this.isTimeToDoExercise(dateTime)) {
      return 'Do exercise';
    }
  }

  isTimeToDoExercise(dateTime: Date) {
    return true;
  }
}
