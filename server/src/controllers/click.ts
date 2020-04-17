import { clicks } from '../db';

import { ClickRequest } from 'stfu-and-click-shared/src/click';

export function registerClick(click: ClickRequest) {
  const existingClickRecord = clicks.find(item => item.session === click.session);
  if (existingClickRecord) {
    existingClickRecord.clicks++;
  } else {
    clicks.push({
      clicks: 1,
      team: click.team,
      session: click.session
    });
  }
}
