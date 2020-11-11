import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {Header, Actions} from '../component/UserDetails';
import colors from '../config/colors';

export default function Details({route, params}) {
    const contact = route.params;
    return (
        <ScrollView style={{ backgroundColor: colors.background }}>
            <Header {...contact}/>
            <Actions {...contact} />
            <Info {...contact} />
        </ScrollView>
    );
}
