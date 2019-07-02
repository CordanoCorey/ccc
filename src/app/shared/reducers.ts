import { Action } from '@caiu/library';

import {
  Players,
  Teams,
  Leagues,
  Games,
  GameTeams,
  GamePlayers,
  Locations,
  Stats,
  StatCategories,
  TeamStats
} from './models';

export function playersReducer(
  state: Players = new Players(),
  action: Action
): Players {
  switch (action.type) {
    default:
      return state;
  }
}

export function teamsReducer(
  state: Teams = new Teams(),
  action: Action
): Teams {
  switch (action.type) {
    default:
      return state;
  }
}

export function leaguesReducer(
  state: Leagues = new Leagues(),
  action: Action
): Leagues {
  switch (action.type) {
    default:
      return state;
  }
}

export function gamesReducer(
  state: Games = new Games(),
  action: Action
): Games {
  switch (action.type) {
    default:
      return state;
  }
}

export function gameTeamsReducer(
  state: GameTeams = new GameTeams(),
  action: Action
): GameTeams {
  switch (action.type) {
    default:
      return state;
  }
}

export function gamePlayersReducer(
  state: GamePlayers = new GamePlayers(),
  action: Action
): GamePlayers {
  switch (action.type) {
    default:
      return state;
  }
}

export function locationsReducer(
  state: Locations = new Locations(),
  action: Action
): Locations {
  switch (action.type) {
    default:
      return state;
  }
}

export function statsReducer(
  state: Stats = new Stats(),
  action: Action
): Stats {
  switch (action.type) {
    default:
      return state;
  }
}

export function teamStatsReducer(
  state: TeamStats = new TeamStats(),
  action: Action
): TeamStats {
  switch (action.type) {
    default:
      return state;
  }
}

export function statCategoriesReducer(
  state: StatCategories = new StatCategories(),
  action: Action
): StatCategories {
  switch (action.type) {
    default:
      return state;
  }
}
