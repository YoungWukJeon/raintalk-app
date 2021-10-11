import React from 'react';
import { styled } from '../../stitches.config';

import CircleImage from '../styled/CircleImage';

const ItemWrapper = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    margin: '15px 10px'
});

const Thumbnail = styled("div", {
    display: 'flex',
    width: '60px',
    height: '60px',
    marginRight: '10px'
});

const ItemContent = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: '5px'
});

const ItemInfoContent = styled("div", {
    display: 'flex'
});

const Name = styled("div", {
    display: 'inline-flex'
});

const JoinedUserNum = styled("div", {
    display: 'inline-flex'
});

const LastChattedAt = styled("div", {
    display: 'flex',
    flex: 1,
    flexFlow: 'row-reverse'
});

const ItemMessageContent = styled("div", {
    display: 'flex'
});

const LastChatMessage = styled("div", {
    display: 'inline-flex'
});

interface IChatRoomItemProps {
    thumbnail: string,
    name: string,
    joinedUserNum: number,
    lastChattedAt: string,
    lastChatMessage: string
}

const ChatRoomItem: React.FC<IChatRoomItemProps> = ({thumbnail, name, joinedUserNum, lastChattedAt, lastChatMessage}) => {
    return (
        <ItemWrapper>
            <Thumbnail>
                <CircleImage src={thumbnail} />
            </Thumbnail>
            <ItemContent>
                <ItemInfoContent>
                    <Name>{name}</Name>
                    <JoinedUserNum>{joinedUserNum}</JoinedUserNum>
                    <LastChattedAt>{lastChattedAt}</LastChattedAt>
                </ItemInfoContent>
                <ItemMessageContent>
                    <LastChatMessage>{lastChatMessage}</LastChatMessage>
                </ItemMessageContent>
            </ItemContent>
        </ItemWrapper>
    )
}

export default ChatRoomItem;