import { environment } from '../../../environments/environment';
// tslint:disable-next-line:ban-ts-ignore
// @ts-ignore
import * as tmi from 'tmi.js';
export class TwitchClients {
  public static vodas3Client = new tmi.Client({
    channels: ['vodas3'],
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      password: environment.twitchOauthPassword,
      username: '#vodas3',
    },
    options: { debug: true },
  });
}
