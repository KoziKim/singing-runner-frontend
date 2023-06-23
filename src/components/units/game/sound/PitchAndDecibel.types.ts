import { Dispatch, SetStateAction } from "react";
import { IPlayersInfo } from "../Game.types";

export interface IPitchAndDecibelProps {
  setPlayersInfo: Dispatch<SetStateAction<IPlayersInfo[]>>;
  isLoadComplete: boolean;
  originAnswer: number[];
  keyUpAnswer: number[];
  keyDownAnswer: number[];
  isKeyUp: boolean;
  isKeyDown: boolean;
  isFrozen: boolean;
  isMute: boolean;
  setDecibel: Dispatch<SetStateAction<number>>;
  sources: React.MutableRefObject<AudioBufferSourceNode[]>;
  setIsLoadComplete: Dispatch<SetStateAction<boolean>>;
  setStartTime: Dispatch<SetStateAction<number>>;
  setIsTerminated: Dispatch<SetStateAction<boolean>>;
}

export interface ISocketScore {
  score: number;
  userId: string;
}
