export interface TwitchClientOnMessageDeleteInput {
  channel: string;
  username?: string;
  userState?: {
    badges?: {broadcaster?: number}| any;
    'target-msg-id': string;
  }| any;
  deletedMessage: string;
  isDeleted?: boolean;
}
