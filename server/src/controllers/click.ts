import { registerNewClick, incrementExistingClick, getAllClickRecords } from '../db';

import { ClickRequest } from 'stfu-and-click-shared/src/click';

export function registerClick(click: ClickRequest) {
  const clicks = getAllClickRecords();
  const existingClickRecord = clicks.find(
    (item) => item.session === click.session,
  );

  if (existingClickRecord) {
    incrementExistingClick(existingClickRecord);
  } else {
    registerNewClick({
      clicks: 1,
      team: click.team,
      session: click.session,
    });
  }
}
