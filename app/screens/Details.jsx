import React from 'react';
import { ScrollView } from 'react-native';
import { Header, Actions, Info } from '../component/UserDetails';
import colors from '../config/colors';

export default function Details({ route }) {
    const contact = route.params;
    return (
        <ScrollView style={{ backgroundColor: colors.background }}>
            <Header {...contact} />
            <Actions {...contact} />
            <Info {...contact} />
        </ScrollView>
    );
}
