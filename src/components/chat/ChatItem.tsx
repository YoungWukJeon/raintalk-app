import { ChattingInfo } from "./model/ChattingInfo";

interface IChatRoomDetailProps {
    chattingInfo: ChattingInfo
}

const ChatItem: React.FC<IChatRoomDetailProps> = ({chattingInfo}) => {
    return (
        <>
            {console.log(chattingInfo)}
        </>
    )
};

export default ChatItem;