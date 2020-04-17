export type ClickRequest = {
  team: string;
  session: string;
}

export type ClickResponse = {
  yourClicks: number;
  teamClicks: number;
}