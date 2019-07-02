import {
  windowHeightSelector,
  windowWidthSelector,
  isMobile,
  lookupValuesSelector,
  build,
  routeParamSelector,
  compareDates,
  compareNumbers
} from '@caiu/library';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  StatCategory,
  Game,
  GameTeam,
  TeamStat,
  Team,
  Location,
  League,
  LeagueTeam
} from './models';

export function isMobileSelector(store: Store<any>): Observable<boolean> {
  return combineLatest(
    windowHeightSelector(store),
    windowWidthSelector(store),
    (h, w) => {
      // console.log(h, w, isMobile());
      return w < h || isMobile();
    }
  );
}

export function statCategoriesSelector(
  store: Store<any>
): Observable<StatCategory[]> {
  return lookupValuesSelector(store, 'StatCategories').pipe(
    map(x => x.map(y => build(StatCategory, y)))
  );
}

export function locationsSelector(store: Store<any>): Observable<Location[]> {
  return store.select('locations').pipe(map(x => x.asArray));
}

export function gamesSelector(store: Store<any>): Observable<Game[]> {
  return combineLatest(
    store.select('games').pipe(map(x => x.asArray)),
    locationsSelector(store),
    (games, locations) => {
      return games.map(x =>
        build(Game, x, {
          locationName: build(
            Location,
            locations.find(y => y.id === x.locationId)
          ).name
        })
      );
    }
  );
}

export function leaguesSelector(store: Store<any>): Observable<League[]> {
  return store.select('leagues').pipe(map(x => x.asArray));
}

export function leagueGamesSelector(store: Store<any>): Observable<Game[]> {
  return combineLatest(
    gamesSelector(store),
    leaguesSelector(store),
    routeParamSelector(store, 'leagueName'),
    (games, leagues, leagueName) => {
      return games.filter(
        x =>
          x.leagueId ===
          build(League, leagues.find(y => y.name === leagueName)).id
      );
    }
  );
}

export function leagueTeamsSelector(
  store: Store<any>
): Observable<LeagueTeam[]> {
  return combineLatest(
    teamsSelector(store),
    leaguesSelector(store),
    routeParamSelector(store, 'leagueName'),
    gameTeamsSelector(store),
    (teams, leagues, leagueName, gameTeams) => {
      return teams
        .filter(
          x =>
            x.leagueId ===
            build(League, leagues.find(y => y.name === leagueName)).id
        )
        .map(team =>
          build(LeagueTeam, {
            team,
            games: gameTeams.filter(x => x.teamId === team.id)
          })
        )
        .sort((a, b) =>
          compareNumbers(a.winPct + 0.001 * a.wins, b.winPct + 0.001 * b.wins)
        )
        .reverse();
    }
  );
}

export function teamsSelector(store: Store<any>): Observable<Team[]> {
  return store.select('teams').pipe(map(x => x.asArray));
}

export function teamStatsSelector(store: Store<any>): Observable<TeamStat[]> {
  return store.select('teamStats').pipe(map(x => x.asArray));
}

export function gameTeamsSelector(store: Store<any>): Observable<GameTeam[]> {
  return combineLatest(
    store.select('gameTeams').pipe(map(x => x.asArray)),
    teamsSelector(store),
    teamStatsSelector(store),
    (gameTeams, teams, stats) => {
      return gameTeams.map(x => {
        const teamStats = stats.filter(y => y.gameTeamId === x.id);
        const teamName = build(Team, teams.find(y => y.id === x.teamId)).name;
        const gt = build(GameTeam, x, { teamStats, teamName });
        const opposingTeamPoints = build(
          TeamStat,
          stats.find(
            y =>
              y.statCategoryId === 1 &&
              y.gameTeamId ===
                build(
                  GameTeam,
                  gameTeams.find(
                    z => z.gameId === gt.gameId && z.teamId !== gt.teamId
                  )
                ).id
          )
        ).total;
        gt.gameResultTypeId =
          gt.score > opposingTeamPoints
            ? 1
            : gt.score < opposingTeamPoints
            ? 2
            : 3;
        return gt;
      });
    }
  );
}

export function gameScoresSelector(store: Store<any>): Observable<Game[]> {
  return combineLatest(
    leagueGamesSelector(store),
    gameTeamsSelector(store),
    gameTeamsSelector(store),
    (games, teams) => {
      return games
        .map(x => {
          const gameTeams = teams.filter(y => y.gameId === x.id);
          return build(Game, x, { gameTeams });
        })
        .sort((a, b) => compareDates(a.startTime, b.startTime));
    }
  );
}
