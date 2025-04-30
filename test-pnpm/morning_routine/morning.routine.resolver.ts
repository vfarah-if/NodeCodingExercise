export class MorningRoutineResolver {
  public remindMeTo(dateTime: Date): string {
    if (this.isTimeToDoExercise(dateTime)) {
      return 'Do exercise';
    } else {
      return '';
    }
  }

  isTimeToDoExercise(dateTime: Date) {
    if (dateTime.getHours() === 6 && dateTime.getMinutes() >= 0 && dateTime.getMinutes() <= 59) {
      return true;
    }
    return false;
  }
}
