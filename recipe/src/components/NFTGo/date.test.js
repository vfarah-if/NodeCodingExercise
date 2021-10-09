import {
  subtractDays,
  dateToEpoch,
  epochToDate,
  secondsSinceEpoch,
} from './date';

describe('date', () => {
  describe('subtractDays', () => {
    test('should get one day prior start date', () => {
      const actual = subtractDays(new Date(2021, 10, 9), 1);
      const expected = new Date(2021, 10, 8);

      expect(actual).toEqual(expected);
    });

    test('should get seven day prior start date', () => {
      const actual = subtractDays(new Date(2021, 10, 9), 7);
      const expected = new Date(2021, 10, 2);

      expect(actual).toEqual(expected);
    });

    test('should get thirty day prior start date', () => {
      const actual = subtractDays(new Date(2021, 10, 9), 30);
      const expected = new Date(2021, 9, 10);

      expect(actual).toEqual(expected);
    });
  });

  describe('jsDateToEpoch', () => {
    test('should get epoch date from date', () => {
      const date = new Date(2021, 3, 28);

      const actual = dateToEpoch(date);
      expect(actual).toBe(1619564400);
    });
  });

  describe('epochToJsDate', () => {
    test('should get date from epoch timestamp', () => {
      const expected = new Date(2021, 3, 28);

      const actual = epochToDate(1619564400);

      expect(actual).toEqual(expected);
    });

    test('should get nft date format in epoch as seconds to make it familiar', () => {
      const expected = new Date('2021-10-08T09:09:18.000Z');
      const nftDateNumber = 1633684158385;
      const epochTimestampInSeconds = secondsSinceEpoch(nftDateNumber);

      const actual = epochToDate(epochTimestampInSeconds);

      // Test dates cast
      expect(actual).toEqual(expected);
      //   console.debug('Dates are equal because:', actual, expected);
      //   Test casting dates into another format
      expect(epochTimestampInSeconds).toEqual(
        secondsSinceEpoch(new Date('2021-10-08T09:09:18.000Z'))
      );
        console.debug(
          'Demonstrate NFS dates from to (24h difference)',
          epochToDate(secondsSinceEpoch(1633418371581)),
          epochToDate(secondsSinceEpoch(1633504771581))
        );
    });
  });
});
