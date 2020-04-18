/**
 * models for database entities. These should use basic TS types.
 */

export type TeamClickRecord = {
  team: string;
  clicks: number;
};

export type PersonalClickRecord = {
  session: string;
  clicks: number;
};
