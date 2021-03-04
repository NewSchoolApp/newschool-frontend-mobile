import React from 'react';
import { View, Pressable } from 'react-native';
import { Badge } from "react-native-paper";
import BellHome from '../../../assets/home-bell';
import BellHomeActive from '../../../assets/home-bell-active';
import { NotificationBellProps } from "./notification-bell.props";
import { Style } from './notification-bell.styles';


export const NotificationBell = (props:NotificationBellProps) => {
    
    const Bell = props.notifications > 0 ? BellHomeActive : BellHome;
    const badgeActive = props.notifications == 0 ? false : true;
    const notificationNumber = props.notifications > 99 ? '99+' : props.notifications;


  return (


    <Pressable onPress={props.onClick}>
        <View style={Style.container}>
            <View style={Style.badge}>
                <Badge visible={badgeActive}>{notificationNumber}</Badge>
            </View>
            <View style={Style.bell}>
                <Bell />
            </View>
        </View>
    </Pressable>
    
    );
}