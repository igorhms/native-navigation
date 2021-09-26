import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const Item = ({ item, navigation }) => (
    <TouchableOpacity style={estilos.containerItem}
        onPress={() =>
            navigation.navigate('Detalhes', { item })
        }>
        <Image source={item.img} style={estilos.imagem} resizeMode='contain' />
        <Text>{item.nome}</Text>
    </TouchableOpacity>
);

const estilos = StyleSheet.create({
    containerItem: {
        height: 200,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    },
    imagem: {
        height: 100
    }
})

export default Item;