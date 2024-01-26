import React from 'react';
import { View, StyleSheet} from 'react-native';
import anonymizeText from '../aiRequests';
import { useNavigation } from '@react-navigation/native';
import ReportIncident from './ReportIncident';
import { GluestackUIProvider, Button, Text,ButtonText} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

const Home = () => {
    const navigation = useNavigation();
  return ( 
    <View style={styles.container}>
      <GluestackUIProvider config={config}>
      <Text style={styles.title}>MediGuard</Text>
      <Text style={styles.subtitle}>Danke für deine Hilfe!</Text>

      <Button variant="solid" onPress={() => navigation.navigate('ReportIncident')}><ButtonText>Report Incident</ButtonText></Button>

      </GluestackUIProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: '100px'
  },
});

export default Home;