import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text, ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
    const navigation = useNavigation()

    const [orders,setOrders] = useState<Order[]>([])
    const [isLoading,setIsLoading] = useState(false)
    const isFocused = useIsFocused()

    const fetchData = () => {
        setIsLoading(true)
        fetchOrders()
            .then(resp=>setOrders(resp.data))
            .catch(()=>Alert.alert('Erro ao buscar os pedidos'))
            .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        if(isFocused){
            fetchData()
        }
    },[isFocused])

    return (
        <>
            <Header/>
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#da5c5c"/>
                ) : (
                    orders.map(order=>(
                        <TouchableWithoutFeedback 
                            key={order.id} 
                            onPress={
                                ()=>navigation.navigate('OrderDetails',{order})
                            }
                        >
                            <OrderCard order={order}/>
                        </TouchableWithoutFeedback>
                    ))
                )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
      },
      button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
      }
});
