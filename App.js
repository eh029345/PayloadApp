import * as React from 'react';
import { Text, View, TextInput } from 'react-native';
import {  WebView } from 'react-native-webview';
import DropDownPicker from 'react-native-dropdown-picker';
function PayloadApp() {
  return (
    <>
    <View style={{ backgroundColor: "gray", flex: 1, paddingTop: 0, alignContent: "flex-end",
    fontFamily: "FuturaBT-Book" }}>
      <DropDownPicker items={[
        {label: 'Short (5.5 ft) bed', value: 'short'},
        {label: 'Standard (6.5 ft) bed', value: 'standard', selected: true, disabled: true},
        {label: 'Long (8 ft) bed', value: 'long'}
      ]}
    containerStyle={{height: 40}}
    defaultValue='standard'
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    />
    </View>
<View>
<WebView
   style={{width: 150, height: 150 }}
   source={{require: 'https://newvistasllc.sharepoint.com/VistaBiz%20Sites/haulgauge/Shared%20Documents/Payload%20App/Payload%20App%20Graphics/dirt_payload-app.jpg'}}
   />
</View>
    <View style={{ backgroundColor: "rgb(140, 70, 70)",
     position: "relative", marginTop: "90%", marginBottom: "100%",
     width: 375, height: 170, borderRadius: 10, background: "transparent"
     }}>
      <TextInput
        style={{ fontSize: 15, borderColor: "transparent", borderWidth: 1,
        marginTop: "10%", marginBottom: "0%",
        position: "relative", textAlign: "center", color: "rgb(177, 103, 107)"
        }}
        placeholder="Total Amount to Move"
      />
      <Text style={{ textAlign: "center", fontSize: 30,
      color: "white", position: "relative", marginBottom: "0%",
      marginTop: "0%"
    }}>Enter Amount to Move</Text>
    </View>
    <View style={{ width: 200, height: 50, paddingTop: 50}}>
   <WebView
   style={{width: 50, height: 50}}
   source={{uri: 'https://newvistasllc.sharepoint.com/VistaBiz%20Sites/haulgauge/Shared%20Documents/Payload%20App/Payload%20App%20Graphics/dirt_payload-app.jpg'}}
   />
   <WebView
   style={{width: 50, height: 50}}
   source={{uri: 'https://newvistasllc.sharepoint.com/VistaBiz%20Sites/haulgauge/Shared%20Documents/Payload%20App/Payload%20App%20Graphics/gravel_2.jpg'}}
   />
   <WebView
   style={{width: 50, height: 50}}
   source={{uri: 'https://newvistasllc.sharepoint.com/VistaBiz%20Sites/haulgauge/Shared%20Documents/Payload%20App/Payload%20App%20Graphics/sand_payload-app.jpg'}}
   />
   <WebView
   style={{width: 50, height: 50}}
   source={{uri: 'https://newvistasllc.sharepoint.com/VistaBiz%20Sites/haulgauge/Shared%20Documents/Payload%20App/Payload%20App%20Graphics/woodchips_payload-app.jpg'}}
   />
    </View>
   {/*} <View>
      <Text>Want to measure the weight of your truck?<br>Check out <strong>BetterWeigh</strong></br></Text>
      <Image source={require('./51701_a__09413.1575497868.jpg')}></Image>
  </View> */}
  </>
  );
}
export default PayloadApp;