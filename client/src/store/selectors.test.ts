import { selectTeamsAround } from './selectors';

describe('selectTeamsAround selector', () => {
  const leaderboard = Array.from(Array(30).keys()).map((n) => ({
    order: n + 1,
    clicks: n * 2,
    team: `team${n + 1}`,
  }));

  it('should return slice of odd count from the middle', () => {
    const selected = selectTeamsAround(7).resultFunc('team15', leaderboard);
    expect(selected[0].team).toBe('team12');
    expect(selected[6].team).toBe('team18');
    expect(selected.length).toBe(7);
  });

  it('should return slice of even count from the middle', () => {
    const selected = selectTeamsAround(6).resultFunc('team15', leaderboard);
    expect(selected[0].team).toBe('team12');
    expect(selected[5].team).toBe('team17');
    expect(selected.length).toBe(6);
  });

  it('should return slice from the beginning', () => {
    const selected = selectTeamsAround(7).resultFunc('team1', leaderboard);
    expect(selected[0].team).toBe('team1');
    expect(selected[6].team).toBe('team7');
    expect(selected.length).toBe(7);
  });

  it('should return slice from the end', () => {
    const selected = selectTeamsAround(7).resultFunc('team29', leaderboard);
    expect(selected[0].team).toBe('team24');
    expect(selected[6].team).toBe('team30');
    expect(selected.length).toBe(7);
  });
});
