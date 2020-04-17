import { ClickResponse } from 'stfu-and-click-shared/src/click';
import { ClickRecord, getAllClickRecords } from './../db/index';
import { NotFoundError } from '../errors/not-found';

export function getUsersSummary(session: string): ClickResponse {
  const clicks = getAllClickRecords();
  const usersClickRecord = findClickRecordBySession(clicks, session);
  if (!usersClickRecord) {
    throw new NotFoundError(`No click record for given session ${session}`);
  }

  const usersClicksCount = usersClickRecord.clicks;
  const teamClicksCount = clicks
    .filter((click) => click.team === usersClickRecord.team)
    .reduce((acc, click) => acc + click.clicks, 0);

  return {
    yourClicks: usersClicksCount,
    teamClicks: teamClicksCount,
  };
}

function findClickRecordBySession(
  clicks: ClickRecord[],
  session: string,
): ClickRecord | undefined {
  return clicks.find((item) => item.session === session);
}
