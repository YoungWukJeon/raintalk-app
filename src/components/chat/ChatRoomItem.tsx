import React from 'react';

import styled from 'styled-components';

const LastChatMessage = styled.div`
    display: flex;
`;

interface ChatRoomItemProps {
    lastChatMessage: string
}

const ChatRoomItem: React.FC<ChatRoomItemProps> = ({lastChatMessage}) => {
    return (
        <React.Fragment>
            <LastChatMessage>{lastChatMessage}</LastChatMessage>
        </React.Fragment>
    )
}

export default ChatRoomItem;