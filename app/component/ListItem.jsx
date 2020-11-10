import React from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../config/styles';
import { capitalizeFirstLetter } from '../helpers/string';

export default function ListItem({ contact, onPress }) {
    const name =
        capitalizeFirstLetter(contact.name.first) + ' ' + capitalizeFirstLetter(contact.name.last);

    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.row}>
                <Image style={styles.avatar} source={{ uri: contact.picture.thumbnail }} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Ionicons
                        style={styles.arrow}
                        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-arrow-forward`}
                        size={30}
                        color={'#666'}
                    />
                </View>
            </View>
        </TouchableHighlight>
    );
}
