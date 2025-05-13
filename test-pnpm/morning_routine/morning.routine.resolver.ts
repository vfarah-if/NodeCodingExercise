export class MorningRoutineResolver {
  public remindMeAt(dateTime: Date): string {
    const activities: [string, (dateTime: Date) => boolean][] = [
      ['Do exercise', this.isExerciseHour],
      ['Read and study', this.isReadAndStudyHour],
      ['Have breakfast', this.isBreakfastHour],
    ];
    for (const [activity, condition] of activities) {
      if (condition(dateTime)) {
        return activity;
      }
    }
    return 'No activity';
  }

  private isBreakfastHour(dateTime: Date) {
    return dateTime.getHours() === 8;
  }

  private isReadAndStudyHour(dateTime: Date) {
    return dateTime.getHours() === 7;
  }

  private isExerciseHour(dateTime: Date) {
    return dateTime.getHours() === 6;
  }
}
