import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const HashValue = async (value: string) =>
  await bcrypt.hash(value, saltOrRounds);
export const MatchHash = async (value: string, hash: string) =>
  await bcrypt.compare(value, hash);
