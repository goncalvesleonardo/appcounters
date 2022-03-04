import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Counters from '../screens/counters';
import Config from '../screens/configscreen';

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Counters" component={Counters} />
      <Tab.Screen name="Config" component={Config} />
    </Tab.Navigator>
  );
}

export default Tabs;
