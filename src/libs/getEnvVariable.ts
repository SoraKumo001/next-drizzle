/**
 * Helper function to retrieve and validate environment variables.
 * Throws an error if the specified variable is not set.
 */
export const getEnvVariable = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
};
