import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

    return (
        <View style={ style.container }>
            <Text style={ style.title }>
                Contador: { counter }
            </Text>

            <Fab 
                title="+1"
                position="br"
                onPress={ () => setCounter( counter + 1 )}
            />

            <Fab 
                title="-1"
                position="bl"
                onPress={ () => setCounter( counter - 1 )}
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationBR } 
                onPress={ () => setCounter( counter + 1) }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>+1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 200, 100, 0.5)',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        // position: 'relative', // son relative por defecto
        top: -20
    },
    
});
