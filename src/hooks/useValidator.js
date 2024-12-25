//TODO implement this with the class and show them how closure is used
export const useValidator = () => {
  const rules = {
    required: (value) => value.trim() !== '' || 'This field is required.',
    minLength: (min) => (value) =>
      value.length >= min || `Minimum length is ${min} characters.`,
    email: (value) => /\S+@\S+\.\S+/.test(value) || 'Invalid email address.',
  };

  const validate = (value, validations) => {
    for (let rule of validations) {
      const result = rule(value);
      if (result !== true) return result;
    }
    return true;
  };

  return { validate, rules };
};
