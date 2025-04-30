export class MorningRoutineResolver {
  public remindMeAt(dateTime: Date): string {
    if (this.isTimeToDoExercise(dateTime)) {
      return 'Do exercise';
    }
    if (this.isTimeToReadAndStudy(dateTime)) {
      return 'Read and study';
    }
    if (this.isTimeToHaveBreakfast(dateTime)) {
      return 'Have breakfast';
    }
    return 'No activity';
  }

  private isTimeToHaveBreakfast(dateTime: Date) {
    if (this.isBreakfastHour(dateTime)) {
      return true;
    }
    return false;
  }

  private isBreakfastHour(dateTime: Date) {
    return dateTime.getHours() === 8;
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
