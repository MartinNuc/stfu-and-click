import { DataSource } from './db.interface';

export class RedisDataSource implements DataSource {
  registerClick(click: import("stfu-and-click-shared/src/click").ClickRequest): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAllTeamsScore(): Promise<import("./schema").TeamClickRecord[]> {
    throw new Error("Method not implemented.");
  }
  getUserScore(session: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
  getTeamScore(team: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
}