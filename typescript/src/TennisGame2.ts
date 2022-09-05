import { TennisGame } from "./TennisGame";

export class TennisGame2 implements TennisGame {
  P1point: number = 0;
  P2point: number = 0;

  P1res: string = "";
  P2res: string = "";

  private player1Name: string;
  private player2Name: string;

  private namesForScore: string[] = ["Love", "Fifteen", "Thirty", "Forty"];

  constructor(player1Name: string, player2Name: string) {}

  getScore(): string {
    if (this.P1point >= 4 && this.P2point >= 0 && this.P1point - this.P2point >= 2) return "Win for player1";

    if (this.P2point >= 4 && this.P1point >= 0 && this.P2point - this.P1point >= 2) return "Win for player2";

    if (this.P1point === this.P2point && this.P1point >= 3) return "Deuce";

    if (this.P1point > this.P2point && this.P2point >= 3) return "Advantage player1";

    if (this.P2point > this.P1point && this.P1point >= 3) return "Advantage player2";

    if (this.P1point < 4 && this.P2point < 4) {
      if (this.P1point === this.P2point) {
        return this.namesForScore[this.P1point] + "-All";
      }

      return `${this.namesForScore[this.P1point]}-${this.namesForScore[this.P2point]}`;
    }
  }

  SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P1Score();
    }
  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  P1Score(): void {
    this.P1point++;
  }

  P2Score(): void {
    this.P2point++;
  }

  wonPoint(player: string): void {
    if (player === "player1") this.P1Score();
    else this.P2Score();
  }
}
