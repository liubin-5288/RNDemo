import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from './home/Home'
import Contact from './contact/Contact'
import Find from './find/Find'
import Me from './me/Me'
import TabBarIcon from './component/TabBarIcon'
import ContactDetail from './contact/ContactDetail'

export default class Main extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const Tab = TabNavigator({
        Home: {
            screen: Home, navigationOptions: ((navigation) => ({
                tabBarLabel: '微信',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/ic_weixin_normal.png')}
                        selectedImage={require('./imgs/ic_weixin_selected.png')}
                    />
                )
            }))
        },
        Contact: {
            screen: Contact, navigationOptions: ((navigation) => ({
                tabBarLabel: '通讯录',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/ic_contacts_normal.png')}
                        selectedImage={require('./imgs/ic_contacts_selected.png')}
                    />
                )
            }))
        },
        Find: {
            screen: Find,
            navigationOptions: ((navigation) => ({
                tabBarLabel: "发现",
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/ic_find_normal.png')}
                        selectedImage={require('./imgs/ic_find_selected.png')}
                    />
                )
            }))
        },
        Me: {
            screen: Me, navigationOptions: ((navigation) => ({
                tabBarLabel: '我',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarIcon
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/ic_me_normal.png')}
                        selectedImage={require('./imgs/ic_me_selected.png')}
                    />
                ),
            }))
        }
    },
    {
        // tab 位于屏幕底部
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#45C018',
            inactiveTintColor: '#999999',
            showIcon: 'true',
            //文字的样式
            labelStyle: {
                fontSize: 12,
                marginTop: 0,
                marginBottom: 0,
            },
            // tabbar 的样式
            style: {
                //这个也可以去掉下划线
                marginBottom: -2,
                backgroundColor: '#FCFCFC',
                borderTopColor: '#e3e3e3',
                borderTopWidth: 1
            },
            //下划线的高度为0 也就可以去掉下划线
            indicatorStyle: {
                height: 0
            }
        },
    }
)


const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
        ContactDetail:{screen:ContactDetail}
    },
    {
        navigationOptions: {
            headerTitle: (
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        marginLeft: 10
                    }}
                > 微信</Text>
            ),
            headerStyle: {
                backgroundColor: '#3E3A39',
                height: 48
            },
            headerRight: (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={() => alert('搜索')}
                    >
                        <View style={{width: 45, height: 45, justifyContent: 'center'}}>
                            <Image
                                source={require('./imgs/ic_search.png')}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            alert('+号')
                        }}
                    >
                        <View style={{width: 45, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                source={require('./imgs/ic_add.png')}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </View>

                    </TouchableOpacity>

                </View>
            )
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25
    }
});
