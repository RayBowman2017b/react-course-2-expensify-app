
/***************************************************************************

sec016a_L166_private_app_router.jsx

       //  [ DEF1: MP_SFC_private_route <1>]

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec009a_routers\sec016a_L166_private_app_router.jsx

import MP_SFC_private_route from './sec016a_L166_private_app_router.jsx';

//  SEC_016 --- 166. Private Only Routes 13:04


 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//  SEC_016 --- 166. Private Only Routes 13:04
//       MOVE SFC_header TO :::
// K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\sec009a_routers\sec016a_L166_private_app_router.jsx

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
                       //[S07251674|Loadable_Handlers.jsx::Loadable_Handlers import-1;^B]

import SFC_header from '../sec009a_components/sec009a_SFC_header.jsx';

// const SFC_header = Loadable({
//   loader: () => import('../sec009a_components/sec009a_SFC_header.jsx'),
//   loading: MP_common_loading_handler,
//   //timeout: 10000, // 10 seconds
//   timeout: 3000, // 3 seconds
// });


   //  [S07251666|sec009a_app_router.jsx::RTR1: MP_SFC_private_route <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_SFC_private_route <1>^B]

   //[ DEF1: MP_SFC_private_route <1>^B]
export const MP_SFC_private_route = ( {
    isAuthenticated,
    component: P_Component,
    ...rest
} ) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <div>
                <SFC_header />
    {/*  */}
    {/* [S07251667|sec009a_SFC_header.jsx::SFC_header rtr2;^B] */}
                <P_Component {...props} />
            </div>
        ) : (
            <div>
                <Redirect to="/" />
    {/* //[S07251667|sec016a_L162_login_page.jsx::SFC_login_page rtr2;^B] */}
            </div>
        )
        ) }
    />
);


const GF_map_state_to_props = (P_state) => ( {
    isAuthenticated: !! P_state.auth.uid
} );

export default connect (GF_map_state_to_props) (MP_SFC_private_route);
