export const useValidator = () => {
  const rules = {
    required: (value) => value.trim() !== '' || 'This field is required.',
    minLength: (min) => (value) =>
      value.length >= min || `Minimum length is ${min} characters.`,
    email: (value) => /\S+@\S+\.\S+/.test(value) || 'Invalid email address.',
  };

  const validate = (value, validators) => {
    for (let validator of validators) {
      const result = validator(value);
      if (result !== true) return result;
    }
    return true;
  };

  const getValidator = {
    required: () => (value) => rules.required(value),
    minLength: (min) => (value) => rules.minLength(min)(value),
    email: () => (value) => rules.email(value),
  };

  return { validate, getValidator };
};
