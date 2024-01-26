//screen to report incidents, uses a different steps to navigate trough the reporting workflow

import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GluestackUIProvider, Button, ButtonText} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import ReportInputComponent from '../components/ReportInputComponent'
import AIReportComponent from '../components/AIReportComponent'
import anonymizeAndSummarizeText from '../aiRequests';

const ReportIncident = () => {

  const steps = [
    { title: 'Step 1', component: ReportInputComponent},
    { title: 'Step 2', component: AIReportComponent },
    // Add more steps as needed
  ];

//the necessary steps report an incident
const navigation = useNavigation();
const [currentStep, setCurrentStep] = useState(0);
const [reportData, setReportData] = useState('');

const CurrentComponent = steps[currentStep].component;

/**
 * send input to the server and generate the anonymized report
 * */
const goToNextStep = async () => {
  result ="";
  if(currentStep == 0){
    result = await anonymizeAndSummarizeText(reportData)
    setReportData(result["message"])
  }
  if (currentStep < steps.length - 1) {
    setCurrentStep(currentStep + 1);
  }
};

const goToPrevStep = () => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};

const handleReportDataChange = (data) => {
  setReportData(data);
};

  return (
    <View style={styles.container}>
    <GluestackUIProvider config={config}>
    <CurrentComponent style={styles.componentContainer} onDataChanged={handleReportDataChange} largeText={reportData}/>
      <View style={styles.buttonContainer}>
      <Button variant="outline" onPress={goToPrevStep}><ButtonText>Back</ButtonText></Button>
      <Button variant="solid" onPress={goToNextStep}><ButtonText>Next</ButtonText></Button>
      </View>
    </GluestackUIProvider>
  </View>
  );
};

//TODO: export styles and functions to their own files
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 20,
  },
  componentContainer: {
    height: '50%',
    width: '60%',
    marginTop: 20,
  },
});

export default ReportIncident;