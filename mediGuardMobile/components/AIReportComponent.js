//the component displaying the generated AI report
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { GluestackUIProvider, Text, Input, InputField, Center} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

const AIReportComponent = ({ largeText}) => {
  return (
    <View>
        <GluestackUIProvider config={config}>
        <Center>
            <Text style={styles.title}>Die KI hat die Eingaben anonymisiert{"\n"} und folgende Zusammenfassung generiert:</Text>
            <Text  style={styles.blockText}>{largeText}</Text>
            <Text style={styles.title}>Gibt es Änderungswünsche?</Text>
            <Input variant="rounded" size="xl" >
            <InputField placeholder="Type here..."></InputField>
            </Input>
      </Center>
      </GluestackUIProvider>
    </View>
  );
};
const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    blockText: {
        width:'60%',
        alignContent: "center",
        maxHeight:"80%",
      fontSize: 14,
      marginBottom: '40px'
    },
  });
export default AIReportComponent;