/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    ScrollView,
    View,
    Text,
    Linking,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

import theme from './../../assets/theme/color';
import contactStyle from './contact.style';
import { getHelpData } from './../../actions/help';

const makeCall = (numnber) => {
    Linking.openURL(`tel:${numnber}`);
}

async function _retrieveData() {
    try {
        const value = await AsyncStorage.getItem('language');
        if (value !== null) {
            return value;
        } else {
            return 'en';
        }
    } catch (error) {
        Alert.alert('Error', error);
    }
};

function Contact() {
    const {
        helpData
    } = useSelector(state => ({
        helpData: state.help.helpPage,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        _retrieveData().then((val) => {
            dispatch(getHelpData(val));
        });
    }, [dispatch]);
    return (
        <View style={contactStyle.background}>
            {
                helpData === null ?
                    <View style={contactStyle.refresh}>
                        <ActivityIndicator size="large" color={theme.primary} />
                    </View>
                    :
                    <ScrollView>
                        <View style={contactStyle.upperSection}>
                            <Text style={contactStyle.title}>{helpData.help_title}</Text>
                        </View>
                        {/* <Image style={contactStyle.logoImg} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/help.png' }} /> */}
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.emergency.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.emergency.description}</Text>
                                {
                                    helpData.emergency.contacts.map((item, index) => {
                                        return (
                                            <View key={index} style={contactStyle.numberSection}>
                                                <Text style={contactStyle.sos}>{item}</Text>
                                                <TouchableOpacity onPress={() => makeCall(item)}>
                                                    <Icon name="phone" size={30} color={theme.primary} />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.mini_health.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.mini_health.description}</Text>
                                <View style={contactStyle.numberSection}>
                                    <Text style={contactStyle.sos}>{helpData.mini_health.title}</Text>
                                    <TouchableOpacity onPress={() => Actions.webview({ url: helpData.mini_health.link, title: helpData.mini_health.title })}>
                                        <Icon name="globe" size={30} color={theme.primary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.who.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.who.description}</Text>
                                <View style={contactStyle.numberSection}>
                                    <Text style={contactStyle.sos}>{helpData.who.title}</Text>
                                    <TouchableOpacity onPress={() => Actions.webview({ url: helpData.who.link, title: helpData.who.title })}>
                                        <Icon name="globe" size={30} color={theme.primary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.cdc.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.cdc.description}</Text>
                                <View style={contactStyle.numberSection}>
                                    <Text style={contactStyle.sos}>{helpData.cdc.title}</Text>
                                    <TouchableOpacity onPress={() => Actions.webview({ url: helpData.cdc.link, title: helpData.cdc.title })}>
                                        <Icon name="globe" size={30} color={theme.primary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            }
        </View>
    );
};

export default Contact;
