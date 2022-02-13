import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
};

export const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                style={[
                    style.fabLocation,
                    ( position === 'br' ) ? style.right : style.left
                ]}
            >
                <View style={style.fab}>
                    <Text style={style.fabText}>{ title }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[
                    style.fabLocation,
                    ( position === 'br' ) ? style.right : style.left
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={style.fab}>
                        <Text style={style.fabText}>{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }


    return ( Platform.OS === 'android' ) ? android() : ios();

}

const style = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    fabText: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    }
});
