import { describe, it, expect } from 'vitest';
import { transformData } from '../src/lib.js';

describe('transformData', () => {
  it('should return the original data if no transformFn is provided', () => {
    const data = [
      { date: '2023-01-01', count: 1, level: 1 }
    ];
    expect(transformData(data)).toEqual(data);
  });

  it('should throw an error if transformFn does not return an array', () => {
    const data = [];
    const transformFn = () => 'not an array';
    expect(() => transformData(data, transformFn)).toThrow(/must return a list of Activity objects/);
  });

  it('should throw an error if transformed data contains invalid items', () => {
    const data = [];
    const transformFn = () => [{ invalid: 'item' }];
    expect(() => transformData(data, transformFn)).toThrow(/Required property "count: number"/);
  });

  it('should throw an error if count is negative', () => {
    const data = [];
    const transformFn = () => [{ date: '2023-01-01', count: -1, level: 0 }];
    expect(() => transformData(data, transformFn)).toThrow(/Required property "count: number"/);
  });

  it('should throw an error if date is invalid format', () => {
    const data = [];
    const transformFn = () => [{ date: '01-01-2023', count: 1, level: 1 }];
    expect(() => transformData(data, transformFn)).toThrow(/Required property "date: YYYY-MM-DD"/);
  });

  it('should throw an error if level is out of bounds', () => {
    const data = [];
    const transformFn = () => [{ date: '2023-01-01', count: 1, level: 5 }];
    expect(() => transformData(data, transformFn)).toThrow(/Required property "level: 0 \| 1 \| 2 \| 3 \| 4"/);
  });

  it('should apply the valid transformation correctly', () => {
    const data = [
      { date: '2023-01-01', count: 1, level: 1 }
    ];
    const transformFn = (d) => {
      return d.map(item => ({ ...item, count: item.count + 5, level: 4 }));
    };
    
    const result = transformData(data, transformFn);
    expect(result[0].count).toBe(6);
    expect(result[0].level).toBe(4);
  });
});
