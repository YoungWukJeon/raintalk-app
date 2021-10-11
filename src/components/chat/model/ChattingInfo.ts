export class User {
    userName: string;
    profileImage: string;
    userType: number;

    constructor(userName: string, profileImage: string, userType: number) {
        this.userName = userName;
        this.profileImage = profileImage;
        this.userType = userType;
    }
}

export class ChattingInfo {
    user: User;
    messageType: number;
    chatMessage: string;
    chattedAt: string;

    constructor(user: User, messageType: number, chatMessage: string, chattedAt: string) {
        this.user = user;
        this.messageType = messageType;
        this.chatMessage = chatMessage;
        this.chattedAt = chattedAt;
    }
}