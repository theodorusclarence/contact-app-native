import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../component/ListItem';

export default function Contacts({ navigation }) {
    const [contacts, setContacts] = useState([]);
    const handleRowPress = (item) => {
        navigation.navigate('Details', item);
        return null;
    };

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://randomuser.me/api/?results=30');
            const data = await res.json();
            setContacts(data.results);
        }
        fetchData();
    }, []);

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
