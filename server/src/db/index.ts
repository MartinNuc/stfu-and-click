export type ClickRecord = {
  team: string;
  session: string;
  clicks: number;
};

const clicks: ClickRecord[] = [
  {
    team: 'applifting',
    session: 'abc123',
    clicks: 20,
  },
  {
    team: 'jiny',
    session: 'Martin',
    clicks: 8,
  },
  {
    team: 'applifting',
    session: 'fhsleih34u2ufw',
    clicks: 5,
  },
];

export function getAllClickRecords(): ClickRecord[] {
  return clicks.slice();
}

export function registerNewClick(click: ClickRecord) {
  clicks.push(click);
}

export function incrementExistingClick(click: ClickRecord) {
  const existingClick = clicks.find((item) => item.session === click.session);
  if (!existingClick) {
    throw new Error(`Click record for user session ${click.session} was not found.`);
  }
  existingClick.clicks++;
}
