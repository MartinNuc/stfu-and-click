import { Session } from './session';
import { Team } from './team';

export type ClickRequest = {
  team: Team;
  session: Session;
}

export type ClickResponse = {
  yourClicks: number;
  teamClicks: number;
}