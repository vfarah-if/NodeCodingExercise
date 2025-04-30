export class MorningRoutineResolver {
  public remindMeTo(dateTime: Date): string {
    if (this.isTimeToDoExercise(dateTime)) {
      return 'Do exercise';
    }
    if (this.isTimeToReadAndStudy(dateTime)) {
      return 'Read and study';
    }
    return 'No activity';
  }

  isTimeToReadAndStudy(dateTime: Date) {
    if (this.isReadAndStudyHour(dateTime)) {
      return true;
    }
    return false;
  }

  isTimeToDoExercise(dateTime: Date) {
    if (this.isExerciseHour(dateTime)) {
      return true;
    }
    return false;
  }

  private isReadAndStudyHour(dateTime: Date) {
    return dateTime.getHours() === 7 && dateTime.getMinutes() >= 0 && dateTime.getMinutes() <= 59;
  }

  private isExerciseHour(dateTime: Date) {
    return dateTime.getHours() === 6 && dateTime.getMinutes() >= 0 && dateTime.getMinutes() <= 59;
  }
}
