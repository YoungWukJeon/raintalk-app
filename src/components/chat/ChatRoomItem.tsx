import React from 'react';
import { styled } from '../../stitches.config';

import CircleImage from '../styled/CircleImage';

const ItemWrapper = styled("li", {
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
    display: 'flex',
    alignItems: 'center'
});

const Name = styled("strong", {
    display: 'inline-flex',
});

const JoinedUserNum = styled("span", {
    display: 'inline-flex',
    marginLeft: '8px',
    fontSize: '12px',
    color: 'rgba(180, 180, 180, 1)'
});

const LastChattedAt = styled("span", {
    display: 'flex',
    flex: 1,
    flexFlow: 'row-reverse',
    fontSize: '12px',
    color: 'rgba(120, 120, 120, 1)'
});

const LastChatMessage = styled("p", {
    margin: '0',
    color: 'rgba(90, 90, 90, 1)'
});

interface IChatRoomItemProps {
    id: string,
    name: string,
    thumbnail: string,
    joinedUserNum: number,
    lastChattedAt: string,
    lastChatMessage: string
}

const ChatRoomItem: React.FC<IChatRoomItemProps> = ({id, name, thumbnail, joinedUserNum, lastChattedAt, lastChatMessage}) => {
    return (
        <ItemWrapper key={id}>
            <Thumbnail>
                <CircleImage src={thumbnail} />
            </Thumbnail>
            <ItemContent>
                <ItemInfoContent>
                    <Name>{name}</Name>
                    <JoinedUserNum>{joinedUserNum}</JoinedUserNum>
                    <LastChattedAt>{lastChattedAt}</LastChattedAt>
                </ItemInfoContent>
                <LastChatMessage>{lastChatMessage}</LastChatMessage>
            </ItemContent>
        </ItemWrapper>
    )
}

export default ChatRoomItem;