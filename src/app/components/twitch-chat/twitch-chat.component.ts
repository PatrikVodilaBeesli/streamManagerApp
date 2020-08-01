import { Component, OnInit } from '@angular/core';
import { TwitchClientOnMessageInput } from '../../interfaces/twitch-client-on-message-input';
import { TwitchClients } from '../../classes/twitchClients/twitch-clients';
import { ChatCommands } from '../../classes/chatCommands/chat-commands';
import {TwitchClientOnMessageDeleteInput} from '../../interfaces/twitch-client-on-message-delete-input';

const chanelName = 'Vodas3';

@Component({
  selector: 'app-twitch-chat',
  styleUrls: ['./twitch-chat.component.scss'],
  templateUrl: './twitch-chat.component.html',
})
export class TwitchChatComponent implements OnInit {
  public values: TwitchClientOnMessageInput[] = [];
  public vodas3Client = TwitchClients.vodas3Client;

  public ngOnInit(): void {
    this.vodas3Client.connect(this.vodas3Client).catch((err: any) => console.log(err));
    this.vodas3Client.on('message', (channel: any, userstate: any, message: any, self: any) => {
      const input: TwitchClientOnMessageInput = {
        channel,
        message,
        self,
        userState: userstate,
      };
      console.log(input);
      if (input.self) {
        return;
      }
      this.values.push(input);
      for (const command of ChatCommands.commands) {
        if (input.message.toLowerCase() === command.find) {
          this.vodas3Client.say(chanelName, command.respond);
        }
      }
    });
    this.vodas3Client.on('messagedeleted', (channel: any, username: any, deletedMessage: any, userstate: any) => {
      const input: TwitchClientOnMessageDeleteInput = { channel, username , deletedMessage, userState: userstate };
      // console.log(input);
      const deletingMessage = this.values.find(value => value.userState.id === input.userState['target-msg-id']);
      if (deletingMessage !== undefined) {
        // console.log('Found deleting message');
        // console.log(deletingMessage);
        deletingMessage.isDeleted = true;
      }
    });
  }

  public twitchRemoveMessage(client: any, id: string): void {
    client.deletemessage(chanelName, id);
  }

}
