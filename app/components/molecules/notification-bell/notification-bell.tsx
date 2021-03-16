import React from 'react';
import { Pressable } from 'react-native';
import { Badge } from 'react-native-paper';
import BellHome from '@ns/assets/home-bell';
import BellHomeActive from '@ns/assets/home-bell-active';
import { NotificationBellProps } from './notification-bell.props';
import { Container, StyledBadge, StyledBell } from './notification-bell.styles';

export const NotificationBell = (props: NotificationBellProps) => {
  const Bell = props.notifications > 0 ? BellHomeActive : BellHome;
  const badgeActive = props.notifications == 0 ? false : true;
  const notificationNumber =
    props.notifications > 99 ? '99+' : props.notifications;

  return (
    <Pressable onPress={props.onClick}>
      <Container>
        <StyledBadge>
          <Badge visible={badgeActive}>{notificationNumber}</Badge>
        </StyledBadge>
        <StyledBell>
          <Bell />
        </StyledBell>
      </Container>
    </Pressable>
  );
};
