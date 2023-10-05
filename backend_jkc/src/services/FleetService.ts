// import { IMatchModel } from '../interfaces/IMatchModel';
// import MatchModel from '../models/MatchModel';
import { IVehicle } from '../interfaces/IVehicle';
import FleetModel from '../models/FleetModel';
import { IVehicleModel } from '../interfaces/IVehicleModel';
// import { ITeamWithMatchesDetails } from '../interfaces/ITeamWithMatchesDetails';
// import TeamDetails from './TeamDetails';
// import { IMatch } from '../interfaces/IMatch';

export default class FleetService {
  constructor(
    private fleetModel: IVehicleModel = new FleetModel(),
    // private matchModel: IMatchModel = new MatchModel(),
  ) { }

  // public async getById(id: number): Promise<IFleet> {
  //   const oneTeam = await this.teamModel.findById(id);
  //   return oneTeam;
  // }

  public async getAll(): Promise<IVehicle[]> {
    const fleet = await this.fleetModel.findAll({});
    return fleet;
  }

  public async findAllLikeByName(name:string): Promise<IVehicle[]> {
    const fleet = await this.fleetModel.findAllLikeByName(name);
    return fleet;
  }

  // private static convertToITeamWithMatchesDetails(currentTeam:ITeamWithMatchesDetails) {
  //   return {
  //     name: currentTeam.name,
  //     totalPoints: currentTeam.totalPoints,
  //     totalGames: currentTeam.totalGames,
  //     totalVictories: currentTeam.totalVictories,
  //     totalDraws: currentTeam.totalDraws,
  //     totalLosses: currentTeam.totalLosses,
  //     goalsFavor: currentTeam.goalsFavor,
  //     goalsOwn: currentTeam.goalsOwn,
  //     goalsBalance: currentTeam.goalsBalance,
  //     efficiency: currentTeam.efficiency,
  //   };
  // }

  // private static resolvesMatch(team:TeamDetails, team1:number, team2:number) {
  //   if (team1 > team2) { // 1:home
  //     team.lose(team1, team2);
  //   } else if (team1 < team2) {
  //     team.win(team2, team1);
  //   } else {
  //     team.draw(team1);
  //   }
  // }

  // private static infoHome(
  //   allTeams:IFleet[],
  //   allMatches: IMatch[],
  //   r: ITeamWithMatchesDetails[] = [],
  // ) {
  //   allTeams.forEach((team) => {
  //     const currentTeam = new TeamDetails(team.teamName, team.id);
  //     const allCurrentTeamHome = allMatches.filter((match) =>
  //       match.homeTeamId === team.id);

  //     allCurrentTeamHome.forEach((match) => {
  //       FleetService.resolvesMatch(currentTeam, match.awayTeamGoals, match.homeTeamGoals);
  //     });

  //     r.push(FleetService.convertToITeamWithMatchesDetails(currentTeam));
  //   });
  //   return r;
  // }

  // private static info(aTeams:IFleet[], aMatches: IMatch[], r: ITeamWithMatchesDetails[] = []) {
  //   aTeams.forEach((team) => {
  //     const currentTeam = new TeamDetails(team.teamName, team.id);
  //     const allCurrentTeamHome = aMatches.filter((match) =>
  //       match.homeTeamId === team.id);
  //     const allCurrentTeamAway = aMatches.filter((match) =>
  //       match.awayTeamId === team.id);
  //     allCurrentTeamHome.forEach((match) => { // quando time é home
  //       FleetService.resolvesMatch(currentTeam, match.awayTeamGoals, match.homeTeamGoals);
  //     });
  //     allCurrentTeamAway.forEach((match) => { // quando time é away
  //       FleetService.resolvesMatch(currentTeam, match.homeTeamGoals, match.awayTeamGoals);
  //     });

  //     r.push(FleetService.convertToITeamWithMatchesDetails(currentTeam));
  //   });
  //   return r;
  // }

  // private static infoAway(
  //   allTeams:IFleet[],
  //   allMatches: IMatch[],
  //   r: ITeamWithMatchesDetails[] = [],
  // ) {
  //   allTeams.forEach((team) => {
  //     const currentTeam = new TeamDetails(team.teamName, team.id);
  //     const allCurrentTeamAway = allMatches.filter((match) =>
  //       match.awayTeamId === team.id);

  //     allCurrentTeamAway.forEach((match) => { // quando time é away
  //       FleetService.resolvesMatch(currentTeam, match.homeTeamGoals, match.awayTeamGoals);
  //     });

  //     r.push(FleetService.convertToITeamWithMatchesDetails(currentTeam));
  //   });
  //   return r;
  // }

  // private static order(teamsDetails:ITeamWithMatchesDetails[]) {
  //   const ordenedTeams = teamsDetails.sort((
  //     a,
  //     b,
  //   ) => {
  //     if (a.totalPoints < b.totalPoints) return 1;
  //     if (a.totalPoints > b.totalPoints) return -1;
  //     if (a.totalVictories < b.totalVictories) return 1;
  //     if (a.totalVictories > b.totalVictories) return -1;
  //     if (a.goalsBalance < b.goalsBalance) return 1;
  //     if (a.goalsBalance > b.goalsBalance) return -1;
  //     if (a.goalsFavor < b.goalsFavor) return 1;
  //     if (a.goalsFavor > b.goalsFavor) return -1;
  //     return 0;
  //   });// return ordenedTeams.slice(0, 10);
  //   return ordenedTeams;
  // }

  // public async getAllHomeWithMatchesDetails():Promise<ITeamWithMatchesDetails[]> {
  //   const allTeams = await this.teamModel.findAll({ });
  //   const allMatches = await this.matchModel.findAll({ where: { inProgress: false } });
  //   const teamsDetails = FleetService.infoHome(allTeams, allMatches);
  //   const ordenedTeams = FleetService.order(teamsDetails);
  //   return ordenedTeams;
  // }

  // public async getAllAwayWithMatchesDetails():Promise<ITeamWithMatchesDetails[]> {
  //   const allTeams = await this.teamModel.findAll({ });
  //   const allMatches = await this.matchModel.findAll({ where: { inProgress: false } });
  //   const teamsDetails = FleetService.infoAway(allTeams, allMatches);
  //   const ordenedTeams = FleetService.order(teamsDetails);
  //   return ordenedTeams;
  // }// getAllWithMatchesDetails

  // public async getAllWithMatchesDetails(): Promise<ITeamWithMatchesDetails[]> {
  //   const allTeams = await this.teamModel.findAll({});
  //   const allMatches = await this.matchModel.findAll({ where: { inProgress: false } });
  //   const teamsDetails = FleetService.info(allTeams, allMatches);
  //   const ordenedTeams = FleetService.order(teamsDetails);
  //   return ordenedTeams;
  // }
}
