import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeStacks from '../stacks/homeStack';
import GraphStacks from '../stacks/graphstack';

const Tab = createBottomTabNavigator()

const Tabs = () => {

  return (
      <Tab.Navigator>
          <Tab.Screen name={'หน้าหลัก'} component={homeStacks} options={{headerShown:false}}/>
          <Tab.Screen name={'กราฟ'} component={GraphStacks} options={{headerShown:false}}/>

          {/* <Tab.Screen name={'ผู้ใช้'} component={userStacks} options={{headerShown:false}}/> */}


          
      </Tab.Navigator>

  )
}


export default Tabs
