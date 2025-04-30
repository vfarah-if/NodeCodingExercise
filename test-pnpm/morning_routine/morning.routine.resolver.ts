export class MorningRoutineResolver {
  public remindMeTo(dateTime: Date): string {
    if (this.isTimeToDoExercise(dateTime)) {
      return 'Do exercise';
    } else {
      return 'No activity';
    }
  }

  isTimeToDoExercise(dateTime: Date) {
    if (this.isExerciseHour(dateTime)) {
      return true;
    }
    return false;
  }

  private isExerciseHour(dateTime: Date) {
    return dateTime.getHours() === 6 && dateTime.getMinutes() >= 0 && dateTime.getMinutes() <= 59;
  }
}
