import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';
describe('useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should return 100 as initial value', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(9);
  });

  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter());
    const { reset, increment } = result.current;
    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
