export class MorningRoutineResolver {
  public remindMeAt(dateTime: Date): string {
    if (this.isTimeToDoExercise(dateTime)) {
      return 'Do exercise';
    }
    if (this.isTimeToReadAndStudy(dateTime)) {
      return 'Read and study';
    }
    return 'No activity';
  }

  private isTimeToReadAndStudy(dateTime: Date) {
    if (this.isReadAndStudyHour(dateTime)) {
      return true;
    }
    return false;
  }

  private isTimeToDoExercise(dateTime: Date) {
    if (this.isExerciseHour(dateTime)) {
      return true;
    }
    return false;
  }

  private isReadAndStudyHour(dateTime: Date) {
    return dateTime.getHours() === 7;
  }

  private isExerciseHour(dateTime: Date) {
    return dateTime.getHours() === 6;
  }
}
