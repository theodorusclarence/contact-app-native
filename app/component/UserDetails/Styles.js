import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors'
const window = Dimensions.get('window');


export const ICON_SIZE = 25;

export default StyleSheet.create({
    image : {
        width : window.width / 2,
        height : window.width / 2,
        borderRadius : window.width / 4,
    },

    headerContainer : {
        alignItems: 'center',
        justifyCotnent : 'center',
        paddingVertical : 20,
    },
    name : {
        fontSize : 22,
        marginTop: 10,
        color: colors.primaryTest,
    },
    actionContainer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.border,
        borderBottomColor: colors.border,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 15,
        backgroundColor: colors.grayBackground,
        paddingHorizontal: 5,
      },
      actionInfo: {
        flexDirection: 'column',
      },
      actionIcons: {
        flexDirection: 'row',
      },
      actionIcon: {
        marginRight: 13,
      },
      actionLabel: {
        color: colors.subtleText,
        fontSize: 12,
        marginBottom: 3,
      },
      actionBody: {
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 5,
      },
      infoContainer: {
        paddingVertical: 15,
        paddingHorizontal : 5,
      },
})