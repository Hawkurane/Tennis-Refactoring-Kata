import { TennisGame } from "./TennisGame";

export class TennisGame3 implements TennisGame {
  private p1Score: number = 0;
  private p2Score: number = 0;
  private p1Name: string;
  private p2Name: string;

  constructor(p1Name: string, p2Name: string) {
    this.p1Name = p1Name;
    this.p2Name = p2Name;
  }

  getScore(): string {
    if (this.isNotMatchPoint(this.p1Score, this.p2Score)) {
      return this.getPlayer1ScoreName(this.p1Score) + "-" + this.getPlayer2ScoreName(this.p1Score, this.p2Score);
    } else {
      if (this.p1Score === this.p2Score) return "Deuce";
      let winningPlayerName: string = this.p1Score > this.p2Score ? this.p1Name : this.p2Name;
      return this.getScoreForWinOrAdvantage(this.p1Score, this.p2Score) + winningPlayerName
    }
  }

  private getScoreForWinOrAdvantage(p1Score: number, p2Score: number): string {
    if((p1Score - p2Score) * (p1Score - p2Score) === 1) return 'Advantage '
    return 'Win for '
  }

  private getPlayer1ScoreName(p1Score: number): string {
    return ["Love", "Fifteen", "Thirty", "Forty"][p1Score];
  }

  private getPlayer2ScoreName(p1Score: number, p2Score: number): string {
    if (p1Score === p2Score) return "All";
    return ["Love", "Fifteen", "Thirty", "Forty"][p2Score];
  }

  private isNotMatchPoint(p1Score: number, p2Score: number): boolean {
    return p1Score < 4 && p2Score < 4 && !(p1Score + p2Score === 6);
  }

  wonPoint(playerName: string): void {
    if (playerName === "player1") this.p1Score += 1;
    else this.p2Score += 1;
  }
}
