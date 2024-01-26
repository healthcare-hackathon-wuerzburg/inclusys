import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { GluestackUIProvider, Text, Input, InputField} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

const ReportInputComponent = ({onDataChanged}) => {
  const [inputData, setInputData] = useState('');

  const handleTextChange = (text) => {
    setInputData(text);
    // Call the callback function to send data back to the parent
    onDataChanged(text);
  };

  return (
    <View>
      <Text style={styles.title}>Was ist passiert?</Text>
      <GluestackUIProvider config={config}>
        <Input variant="rounded" size="xl" >
          <InputField value={inputData} onChangeText={handleTextChange} placeholder="Type here..."></InputField>
        </Input>
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
});

export default ReportInputComponent;