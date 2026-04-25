export interface Challenge {
  id: string;
  simple: string;
  complicated: string;
  searchTerm: string;
  complicatedSearchTerm: string;
}

export type ChallengeMode = 'simple' | 'complicated';

export interface ActiveChallenge {
  challenge: Challenge;
  mode: ChallengeMode;
  imageUrl: string | null;
  imageLoading: boolean;
  imageError: boolean;
}

export interface TimerState {
  remaining: number;
  running: boolean;
  finished: boolean;
}

export interface GalleryEntry {
  id: string;
  challengeName: string;
  mode: ChallengeMode;
  imageDataUrl: string;
  capturedAt: number;
}
