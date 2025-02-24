import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Screens from '.';
import IntroSlider from 'containers/Slider';
import Login from 'containers/Login';
import SignIn from 'containers/SignIn';
import PostAuthStack from './PostAuthStack';
import FogotPswd from 'containers/ForgotPassword';
import Notification from 'containers/Notification';
import {authSelector} from 'features/Auth/AuthSlice';
import Settings from 'containers/Settings';
import Enquiry from 'containers/Enquiry';
import EnquiryCreate from 'containers/Enquiry/Create';
import PrivacyPolicy from 'containers/PrivacyPolicy';
import AdvancedActivity from 'containers/AdvancedActivity';
import AdvancedRecharge from 'containers/AdvancedActivityDetails';
import Help from 'containers/Help';
import ProfileEdit from 'containers/ProfileEdit';
import ProfileEditSave from 'containers/ProfileEditSave';
import Bill from 'containers/Bill';
import Receipt from 'containers/Receipt/BillReceipt';
import ExpiringSubscription from 'containers/ExpiringSubscription';
import Plan from 'containers/Plan';
// SUBSCRIBERS
import Subscribers from 'containers/subscribers';
import SubscriberInfo from '/containers/subscribers/SubscriberInfo';
import SubscriberUsage from 'containers/subscribers/SubscriberUsage';
import SubscriberHistory from 'containers/subscribers/SubscriberHistory';
import RechargeBills from 'containers/subscribers/RechargeHistory';
import OtherBills from 'containers/subscribers/OtherBills';
import CreateSubscriber from 'containers/subscribers/Create';
import Success from 'components/Screens/Subscribers/Verification/Success';
import GenerateReceipt from 'components/Screens/Subscribers/Receipt/Create';
import HardwareAndNetwork from 'components/Screens/Subscribers/HardwareAndNetwork/Create';
import Feasibility from 'containers/Feasibility';
// LCO
import LcoList from 'containers/Lco';
import LcoInfo from 'containers/Lco/LcoInfo';
import LcoEnquiry from 'containers/Lco/Enquiry';
import LcoEnquiryInfo from 'containers/Lco/EnquiryInfo';
import LcoEnquiryCreate from 'containers/Lco/EnquiryCreate';
import LcoFeasibility from 'containers/Lco/Feasibility';
import Documents from 'containers/subscribers/Documents';
import Tickets from 'containers/Tickets';
import CreateTicket from 'containers/Tickets/CreateTicket';
import EnquiryInfo from 'containers/Enquiry/Info';
import TicketInfo from 'containers/Tickets/TicketInfo';
import FeasibilityInfo from 'containers/Feasibility/info';
import Splash from 'containers/Splash';
import LcoSelect from 'containers/Lco/LcoSelect';

const PreAuthStack = () => {
  const Stack = createStackNavigator();
  const {accessToken} = useSelector(authSelector);
  console.log(
    '********************************userToken***************************' +
      accessToken,
  );

  return (
    <Stack.Navigator
      // headerMode={'none'}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.SPLASH}
      // initialRouteName={
      //   userToken !== '' ? Screens.POST_AUTH_STACK : Screens.INTROSLIDER
      // }
    >
      <Stack.Screen name={Screens.SPLASH} component={Splash} />
      <Stack.Screen name={Screens.INTROSLIDER} component={IntroSlider} />
      <Stack.Screen name={Screens.LOGIN} component={Login} />
      <Stack.Screen name={Screens.SIGNIN} component={SignIn} />
      <Stack.Screen name={Screens.POST_AUTH_STACK} component={PostAuthStack} />
      <Stack.Screen name={Screens.FORGOTPSWD} component={FogotPswd} />
      <Stack.Screen name={Screens.NOTIFICATION} component={Notification} />
      <Stack.Screen name={Screens.SETTINGS} component={Settings} />
      <Stack.Screen name={Screens.ENQUIRY} component={Enquiry} />
      <Stack.Screen name={Screens.CREATE_ENQUIRY} component={EnquiryCreate} />
      <Stack.Screen name={Screens.ENQUIRY_INFO} component={EnquiryInfo} />

      <Stack.Screen name={Screens.PRIVACYPOLICY} component={PrivacyPolicy} />
      <Stack.Screen name={Screens.PROFILE_EDIT} component={ProfileEdit} />
      <Stack.Screen name={Screens.BILL} component={Bill} />
      <Stack.Screen name={Screens.FEASIBILITY} component={Feasibility} />
      <Stack.Screen
        name={Screens.FEASIBILITY_INFO}
        component={FeasibilityInfo}
      />
      <Stack.Screen name={Screens.TICKETS} component={Tickets} />
      <Stack.Screen name={Screens.TICKET_INFO} component={TicketInfo} />
      <Stack.Screen name={Screens.CREATE_TICKET} component={CreateTicket} />

      <Stack.Screen
        name={Screens.PROFILE_EDIT_SAVE}
        component={ProfileEditSave}
      />
      {/* TODO: ADVANCED ACTIVITY */}
      <Stack.Screen
        name={Screens.ADVANCEDACTIVITY}
        component={AdvancedActivity}
      />
      <Stack.Screen
        name={Screens.ADVANCEDRECHARGE}
        component={AdvancedRecharge}
      />
      <Stack.Screen name={Screens.HELP} component={Help} />
      <Stack.Screen name={Screens.RECEIPT} component={Receipt} />
      <Stack.Screen name={Screens.CREATE_RECEIPT} component={GenerateReceipt} />

      <Stack.Screen
        name={Screens.EXPIRING_SUBSCRIPTION}
        component={ExpiringSubscription}
      />
      <Stack.Screen name={Screens.PLAN} component={Plan} />

      {/* TODO: LCO LIST */}
      <Stack.Screen name={Screens.LCO} component={LcoList} />
      <Stack.Screen name={Screens.LCO_INFO} component={LcoInfo} />
      <Stack.Screen name={Screens.LCO_ENQUIRY} component={LcoEnquiry} />
      <Stack.Screen name={Screens.LCO_FEASIBILITY} component={LcoFeasibility} />
      <Stack.Screen
        name={Screens.LCO_ENQUIRY_INFO}
        component={LcoEnquiryInfo}
      />
      <Stack.Screen
        name={Screens.LCO_ENQUIRY_CREATE}
        component={LcoEnquiryCreate}
      />

      {/* TODO: SUBSCRIBERS */}
      <Stack.Screen name={Screens.SUBSCRIBER} component={Subscribers} />
      <Stack.Screen name={Screens.LCO_SELECT} component={LcoSelect} />
      <Stack.Screen
        name={Screens.CREATE_SUBSCRIBER}
        component={CreateSubscriber}
      />
      <Stack.Screen name={Screens.SUBSCRIBERINFO} component={SubscriberInfo} />
      <Stack.Screen
        name={Screens.HARDWAREANDNETWORK}
        component={HardwareAndNetwork}
      />

      <Stack.Screen
        name={Screens.SUBSCRIBERUSAGE}
        component={SubscriberUsage}
      />
      <Stack.Screen
        name={Screens.SUBSCRIBER_HISTORY}
        component={SubscriberHistory}
      />
      <Stack.Screen
        name={Screens.SUBSCRIBER_VERIFICATION_SUCCESS}
        component={Success}
      />
      <Stack.Screen name={Screens.SUBSCRIBER_DOCUMENTS} component={Documents} />

      <Stack.Screen name={Screens.RECHARGE_BILLS} component={RechargeBills} />
      <Stack.Screen name={Screens.OTHER_BILLS} component={OtherBills} />
    </Stack.Navigator>
  );
};

export default PreAuthStack;
