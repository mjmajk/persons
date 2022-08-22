const env = import.meta.env

export const getEnv = (key: string) => env[key]
