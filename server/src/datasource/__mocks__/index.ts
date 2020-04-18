import { ClickRequest } from 'stfu-and-click-shared/src/click';
import { NotFoundError } from '../../errors/not-found';
import { Team } from 'stfu-and-click-shared/src/team';
import { TeamClickRecord, PersonalClickRecord } from '../schema';
import { DataSource } from '../datasource.interface';
import { User } from '../../controllers/summary';

/**
 * This fake data source is currently not used. 
 * 
 * The reason is that supertest spawns its own express instance on random port and mocks don't work there
 */
class InMemoryDataSource implements DataSource {
  teamClicks: TeamClickRecord[] = [];
  personalClicks: PersonalClickRecord[] = [];

  async getAllTeamsScore() {
    return this.teamClicks;
  }

  async registerClick(click: ClickRequest) {
    this.incrementTeamClicks(click);
    this.incrementPersonalClicks(click);
  }

  incrementTeamClicks(click: ClickRequest) {
    const existingClick = this.teamClicks.find(
      (item) => item.team === click.team,
    );
    if (existingClick) {
      existingClick.clicks++;
    } else {
      this.teamClicks.push({
        clicks: 1,
        team: click.team,
      });
    }
  }

  incrementPersonalClicks(click: ClickRequest) {
    const existingClick = this.personalClicks.find(
      (item) => item.session === click.session,
    );
    if (existingClick) {
      existingClick.clicks++;
    } else {
      this.personalClicks.push({
        clicks: 1,
        session: click.session,
      });
    }
  }

  async getUserScore(user: User) {
    const userScore = this.personalClicks.find(
      (personalClick) => personalClick.session === user.session,
    );
    if (!userScore) {
      throw new NotFoundError(
        `User with session ${user.session} was not found.}]`,
      );
    }
    return userScore.clicks;
  }

  async getTeamScore(team: Team) {
    const teamScore = this.teamClicks.find(
      (teamClicks) => teamClicks.team === team,
    );
    if (!teamScore) {
      throw new NotFoundError(`Team with name "${team}" was not found.}]`);
    }
    return teamScore.clicks;
  }
}

export default new InMemoryDataSource();
