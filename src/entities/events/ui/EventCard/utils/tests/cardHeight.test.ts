import {describe, it, expect} from 'vitest';
import { getCardHeight } from '../cardHeight';


describe('Тестирование функции getCardHeight', () => {
  // 1. проверить когда ровно час
  it('should return 70px for one hour difference', () => {
    const start = '2025-03-17T11:00:00Z';
    const end = '2025-03-17T12:00:00Z';
    expect(getCardHeight(start, end)).toBe('70px');
  })

  // 2. Проверить когда 2 часа
  it('should return 140px for two hours difference', () => {
    const start = '2025-03-17T11:00:00Z';
    const end = '2025-03-17T13:00:00Z';
    expect(getCardHeight(start, end)).toBe('140px');
  })

  // 3. Проверить когда нет вообще времени
  it('should return 25px when both start and end are null', () => {
    expect(getCardHeight(null, null)).toBe('25px');
  })

  // 4. Проверить, когда нет хотя бы одного времени
  it('should return 25px when one of the times is missing', () => {
    const start = '2025-03-17T11:00:00Z';
    const end = '2025-03-17T12:00:00Z';
    expect(getCardHeight(start, null)).toBe('25px');
    expect(getCardHeight(null, end)).toBe('25px');
  });

  // 5. Проверить, когда 1 час 10 минут
  it('should return correct height for a duration one hour and ten minutes', () => {
    const start = '2025-03-17T11:00:00Z';
    const end = '2025-03-17T12:10:00Z';
    const result = getCardHeight(start, end);

    expect(parseFloat(result)).toBeCloseTo(81.66666666666667, 10);
  });
})