import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

interface Props {
    title: string;
    onPress: () => void;
  }
  
  const ButtonGradiant: React.FC<Props> = ({ title, onPress }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <LinearGradient
          colors={['#FFD801', '#FF804F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    title: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default ButtonGradiant;
