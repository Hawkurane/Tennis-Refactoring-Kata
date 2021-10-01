import { TennisGame } from './TennisGame';


export class TennisGame1 implements TennisGame {
  constructor(
    private player1Name: string,
    private player2Name: string,
    private m_score1: number = 0,
    private m_score2: number = 0) {
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) this.m_score1++;
    if (playerName === this.player2Name) this.m_score2++;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) 
      return this.getScoreNameForEqualScores(this.m_score1);
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) 
     return this.getScoreNameForNonEqualMatchPoints(this.m_score1, this.m_score2);
    else
      return this.getScoreForNonEqualNorMatchPoints(this.m_score1, this.m_score2);  
  }

  private getScoreForNonEqualNorMatchPoints(scorePlayer1: number, scorePlayer2: number){
    return this.getNumberAsScoreName(scorePlayer1) + '-' + this.getNumberAsScoreName(scorePlayer2);
  }

  private getNumberAsScoreName(score: number): string {
    if(score === 0) return 'Love';
    if(score === 1) return 'Fifteen';
    if(score === 2) return 'Thirty';
    if(score === 3) return 'Forty';
    return 'ERROR';
  }

  private getScoreNameForNonEqualMatchPoints(scorePlayer1: number, scorePlayer2: number): string {
    const minusResult: number = scorePlayer1 - scorePlayer2;
    if (minusResult === 1) return 'Advantage player1';
    else if (minusResult === -1) return 'Advantage player2';
    else if (minusResult >= 2) return 'Win for player1';
    else return 'Win for player2';
  }

  private getScoreNameForEqualScores(score: number): string {
    if(score === 0) return 'Love-All';
    if(score === 1) return 'Fifteen-All';
    if(score === 2) return 'Thirty-All';
    return 'Deuce';
  }
}
