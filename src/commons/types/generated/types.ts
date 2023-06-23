export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type IAddFriendDto = {
  firendId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type IAuthDto = {
  __typename?: 'AuthDto';
  accessToken: Scalars['String']['output'];
  user: IUser;
};

export type IAuthTokenDto = {
  __typename?: 'AuthTokenDto';
  accessToken: Scalars['String']['output'];
};

export type IAuthUserDto = {
  __typename?: 'AuthUserDto';
  character: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  userActive: Scalars['Int']['output'];
  userEmail: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  userKeynote: Scalars['Int']['output'];
  userMmr: Scalars['Int']['output'];
  userPoint: Scalars['Int']['output'];
  userTier: Scalars['String']['output'];
};

export type IFriendDto = {
  __typename?: 'FriendDto';
  character: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  userActive: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
  userMmr: Scalars['Int']['output'];
  userTier: Scalars['String']['output'];
};

export type IGameSongDto = {
  __typename?: 'GameSongDto';
  singer: Scalars['String']['output'];
  songFemale: Scalars['String']['output'];
  songFemaleDown: Scalars['String']['output'];
  songFemaleUp: Scalars['String']['output'];
  songGender: Scalars['Boolean']['output'];
  songLyrics: Scalars['String']['output'];
  songMale: Scalars['String']['output'];
  songMaleDown: Scalars['String']['output'];
  songMaleUp: Scalars['String']['output'];
  songTitle: Scalars['String']['output'];
  vocalMale: Scalars['String']['output'];
  vocalMaleDown: Scalars['String']['output'];
  vocalMaleUp: Scalars['String']['output'];
};

export type IHostUserInput = {
  nickname: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type IHostUserOutput = {
  __typename?: 'HostUserOutput';
  nickname: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  addFriend: Scalars['String']['output'];
  deleteNotification: Scalars['String']['output'];
  friendRequest: Scalars['String']['output'];
  inviteFriend: Scalars['String']['output'];
  loginUser: IAuthDto;
  logout: Scalars['String']['output'];
  longPolling: IPollingDto;
  refreshAccessToken: IAuthTokenDto;
  registerUser: IAuthDto;
  removeFriend: Scalars['String']['output'];
  saveReplay: IReply;
  updateCharacter: IUserCharacterResponseDto;
  updateUserKeynote: IUserKeynoteResponseDto;
};


export type IMutationAddFriendArgs = {
  addFriendDto: IAddFriendDto;
};


export type IMutationInviteFriendArgs = {
  friendId: Scalars['String']['input'];
  hostUserDto: IHostUserInput;
};


export type IMutationLoginUserArgs = {
  userLoginDto: IUserLoginDto;
};


export type IMutationLogoutArgs = {
  userId: Scalars['String']['input'];
};


export type IMutationLongPollingArgs = {
  userId: Scalars['String']['input'];
};


export type IMutationRegisterUserArgs = {
  newUser: IUserRegisterDto;
};


export type IMutationRemoveFriendArgs = {
  addFriendDto: IAddFriendDto;
};


export type IMutationSaveReplayArgs = {
  userId: Scalars['String']['input'];
  userVocal: Scalars['String']['input'];
};


export type IMutationUpdateCharacterArgs = {
  character: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type IMutationUpdateUserKeynoteArgs = {
  keynote: IUserKeynoteStatus;
  userId: Scalars['String']['input'];
};

export type IPollingDto = {
  __typename?: 'PollingDto';
  hostUserDtoList: Array<IHostUserOutput>;
  userNotificationList: Array<IUserNotification>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchUser: IAuthUserDto;
  fetchUserGuard: IAuthUserDto;
  getFriendList: Array<IFriendDto>;
  getNotification: Array<IUserNotification>;
  searchFriend: Array<IUser>;
  searchSong: Array<IGameSongDto>;
  searchUser: Array<IFriendDto>;
};


export type IQueryFetchUserArgs = {
  userId: Scalars['String']['input'];
};


export type IQueryGetFriendListArgs = {
  page: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};


export type IQueryGetNotificationArgs = {
  page: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};


export type IQuerySearchFriendArgs = {
  addFriendDto: IAddFriendDto;
};


export type IQuerySearchSongArgs = {
  keyword: Scalars['String']['input'];
  page: Scalars['Int']['input'];
};


export type IQuerySearchUserArgs = {
  nickname: Scalars['String']['input'];
  page: Scalars['Float']['input'];
};

export type IReply = {
  __typename?: 'Reply';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type IUser = {
  __typename?: 'User';
  character: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  nickname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  userActive: Scalars['Int']['output'];
  userEmail: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  userKeynote: Scalars['Int']['output'];
  userMmr: Scalars['Int']['output'];
  userPoint: Scalars['Int']['output'];
};

export type IUserCharacterResponseDto = {
  __typename?: 'UserCharacterResponseDto';
  character: ICharacterEnum;
  userId: Scalars['String']['output'];
};

export type IUserKeynoteResponseDto = {
  __typename?: 'UserKeynoteResponseDto';
  userId: Scalars['String']['output'];
  userKeynote: Scalars['Int']['output'];
};

export type IUserLoginDto = {
  password: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};

export type IUserNotification = {
  __typename?: 'UserNotification';
  content: Scalars['String']['output'];
  deletedAt: Scalars['DateTime']['output'];
  receivedAt: Scalars['DateTime']['output'];
  sender: IUser;
  senderId: Scalars['String']['output'];
  user: IUser;
  userId: Scalars['String']['output'];
};

export type IUserRegisterDto = {
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};

export enum ICharacterEnum {
  Beluga = 'BELUGA',
  Hare = 'HARE',
  Husky = 'HUSKY',
  Lynx = 'LYNX',
  Narwhal = 'NARWHAL',
  Puffin = 'PUFFIN',
  Puma = 'PUMA',
  Snowleopard = 'SNOWLEOPARD'
}

export enum IUserKeynoteStatus {
  FemaleKey = 'FEMALE_KEY',
  MaleKey = 'MALE_KEY',
  OriginalKey = 'ORIGINAL_KEY'
}
