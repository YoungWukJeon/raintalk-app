export class ChatRoomInfo {
    chatRoomId: string;
    thumbnail: string;
    name: string;
    joinedUserNum: number;
    lastChattedAt: string;
    lastChatMessage: string;

    constructor(chatRoomId: string, thumbnail: string, name: string, joinedUserNum: number, lastChattedAt: string, lastChatMessage: string) {
        this.chatRoomId = chatRoomId;
        this.thumbnail = thumbnail;
        this.name = name;
        this.joinedUserNum = joinedUserNum;
        this.lastChattedAt = lastChattedAt;
        this.lastChatMessage = lastChatMessage;
    }
}