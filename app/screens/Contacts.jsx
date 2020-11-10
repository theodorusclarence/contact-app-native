import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { contacts } from '../config/data';
import ListItem from '../component/ListItem';

export default function Contacts({ navigation }) {
    const handleRowPress = (item) => {
        navigation.navigate('Details', item);
        return null;
    };

    return (
        <>
            <FlatList
                style={{ backgroundColor: '#fff' }}
                data={contacts}
                renderItem={({ item }) => (
                    <ListItem contact={item} onPress={() => handleRowPress(item)} />
                )}
                keyExtractor={(item) => item.email}
            />
        </>
    );
}
