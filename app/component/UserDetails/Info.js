import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Row from './Row';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ login, dob, location, registered }) => (
    <View style={styles.infoContainer}>
        <Row label='city' body={capitalizeFirstLetter(location.city)} />
        <Row label='birthday' body={moment(dob.date).format('MMMM Do, YYYY')} />
        <Row label='registered' body={moment(registered.date).format('MMMM Do, YYYY')} />
        <Row label='username' body={login.username} />
    </View>
);

export default Info;
