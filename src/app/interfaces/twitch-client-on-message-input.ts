export interface TwitchClientOnMessageInput {
  channel: string;
  userState?: {
    badges?: {broadcaster?: number}| any;
    id?: string
  }| any;
  message: string;
  self: boolean;
  isDeleted?: boolean;
}
