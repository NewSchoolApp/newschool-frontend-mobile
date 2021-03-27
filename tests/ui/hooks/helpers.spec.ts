import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '@ns/ui/core/hooks/helpers';

const makeFakeFetch = () => {
  return Promise.resolve('any_thing');
};

describe('helpers', () => {
  describe('useFetch', () => {
    test('Should set loading to true when fetch is called', async () => {
      const sut = useFetch;
      const { result } = renderHook(() => sut(makeFakeFetch));
      const promise = act(() => result.current.fetch());
      expect(result.current.loading).toBe(true);
      await promise;
    });

    test('Should set loading to false when fetch is resolved', async () => {
      const sut = useFetch;
      const { result } = renderHook(() => sut(makeFakeFetch));
      await act(async () => result.current.fetch());
      expect(result.current.loading).toBe(false);
    });

    test('Should return fetch result when succeeds', async () => {
      const sut = useFetch;
      const { result } = renderHook(() => sut(makeFakeFetch));
      await act(async () => result.current.fetch());
      expect(result.current.data).toBe('any_thing');
    });

    test('Should return valid fetch result when succeeds', async () => {
      const sut = useFetch;
      const { result } = renderHook(() =>
        sut(() => Promise.reject(new Error())),
      );
      await act(async () => result.current.fetch());
      expect(result.current.error).toBeDefined();
    });
  });
});
