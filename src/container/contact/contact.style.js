import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from './../../assets/theme/font';

const contactStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.light_grey,
    },
    logoImg: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginBottom: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: fontTheme.text20,
        marginTop: 50,
        marginBottom: 30,
        color: theme.primary,
    },
    helpCard: {
        backgroundColor: theme.white,
        marginHorizontal: '7%',
        height: 120,
        borderRadius: 20,
        marginVertical: 10,
    },
    helpTopSection: {
        backgroundColor: theme.primary,
        height: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 20,
        justifyContent: 'center',
    },
    helpTopTitle: {
        color: theme.white,
    },
    helpBottomSection: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    helpDesc: {
        fontSize: fontTheme.text16,
    },
    numberSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
        marginHorizontal: 30,
    },
    sos: {
        fontSize: fontTheme.text20,
    },
});

export default contactStyle;