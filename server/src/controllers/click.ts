import datasource from '../datasource';

import { ClickRequest } from 'stfu-and-click-shared/src/click';

export function registerClick(click: ClickRequest) {
  return datasource.registerClick(click);
}
