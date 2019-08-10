import React, { useEffect } from 'react';
import { Text, Button, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { withNavigation } from './dashboard-screen.enhancers';

export const DashboardScreenComponent = withNavigation((props) => {
  const goToTos = () => {
    props.navigation.push('modal');
  };
  useEffect(() => {
    goToTos();
  });
  return (
    <>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }]
        }}
        width={Dimensions.get('window').width - 32} // from react-native
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <Text testID="dashboard_welcome_text">Welcome to the dashboard</Text>
      <Button title="View TOS" onPress={goToTos} />
    </>
  );
});