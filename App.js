import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PureChart from 'react-native-pure-chart';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
      <Text style={styles.TextStyle}>Graph</Text>
      <View style={styles.chartContainer}>
      <PureChart data={[
      {x: '1', y: 10},
      {x: '2', y: 20},
      {x: '3', y: 30},
      {x: '4', y: 40},
      {x: '5', y: 50},
      ]}
       type='line'
       height={200}
       xAxisGridLineColor={'white'}
       yAxisGridLineColor={'white'}
       labelColor={'black'}
       showEvenNumberXaxisLabel={false}
       xAxisColor={'black'}
       yAxisColor={'black'}
       width={'100%'}
       backgroundColor={'white'}
       defaultColumnMargin={5}
        />     
        </View>
    );
  }
}

const styles = StyleSheet.create({
MainContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  chartContainer: {
    top:0,
    width:'100%',
    height:250,
    borderColor:'white',
    borderTopWidth:1,
    borderBottomWidth:1,
    transform: [{translateX:0, translateY: 0,rotate:'0deg' }]
  },
   TextStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#009688',
  },
  });


  
