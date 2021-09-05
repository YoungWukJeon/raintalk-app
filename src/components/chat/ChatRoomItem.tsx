import React from 'react';
import { styled } from '../../stitches.config';

const ItemWrapper = styled("div", {
    display: 'flex',
    flexDirection: 'row'
});

const Thumbnail = styled("div", {
    display: 'flex',
    width: '60px',
    height: '60px',
    backgroundColor: 'rgb(90, 210, 210)'
});

const ItemContent = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(180, 90, 210)'
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
    display: 'inline-flex'
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
            <Thumbnail />
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