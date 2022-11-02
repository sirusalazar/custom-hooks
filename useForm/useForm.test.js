const { renderHook, act } = require('@testing-library/react');
const { useForm } = require('../../src/hooks');

describe('useForm', () => {
  const initialForm = {
    name: 'test',
    email: 'test@test.com',
  };
  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should change name field from form', () => {
    const newValue = 'test';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { value: newValue, name: 'name' } });
    });

    expect(result.current.name).toBe(newValue);
  });

  test('should change name field from form', () => {
    const newValue = 'test';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { value: newValue, name: 'name' } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
  });
});
