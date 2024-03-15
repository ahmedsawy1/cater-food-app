import {t} from 'i18next';
import {showMessage} from 'react-native-flash-message';
import {axiosAPI} from '../../api/config';
import {AsyncKeys, saveItem} from '../../constants/helpers';
import {ActionType} from '../types/types';

export const StartLoading = () => {
  return {type: ActionType.LOADING_STARTED, payload: null};
};

export const EndLoading = () => {
  return {type: ActionType.LOADING_END, payload: null};
};

export const registerAction = (
  body: object,
  cb: (success?: boolean) => void,
) => {
  return async (dispatch: any) => {
    dispatch(StartLoading());
    try {
      let response = await axiosAPI.post(`ocapi/account/register`, body);
      let {data} = response;

      if (data.hasOwnProperty('error_warning')) {
        const errorArr = [
          'error_firstname',
          'error_lastname',
          'error_email',
          'error_telephone',
          'error_password',
          'error_confirm',
          'error_warning',
        ];
        errorArr.forEach(element => {
          if (data.hasOwnProperty(element) && data[element].trim()) {
            showMessage({
              message: data[element],
              type: 'danger',
            });
          }
        });

        cb(false);
      } else {
        const {firstname, lastname, email, telephone, newsLetter} = data;
        dispatch({
          type: ActionType.LOAD_AUTH_DATA,
          payload: {firstname, lastname, email, telephone, newsLetter},
        });
        const {currency, currencies, language, languages} = data;

        saveItem(AsyncKeys.CURRENCY, currency.code);
        saveItem(AsyncKeys.LANGUAGE, language);
        saveItem(AsyncKeys.USER_DATA, {
          firstname,
          lastname,
          email,
          telephone,
          newsLetter,
        });

        dispatch({
          type: ActionType.LOAD_APP_SETTINGS,
          payload: {currency, currencies, language, languages},
        });

        dispatch({type: ActionType.LOG_USER_IN, payload: null});
        cb(true);
      }
      dispatch(EndLoading());
    } catch (error) {
      cb(false);
      dispatch(EndLoading());
    }
  };
};

export const tempLogin = () => ({
  type: 'TEMP_LOGIN',
  // payload:
});

// export const loginNormal = (body: object, cb: (success?: boolean) => void) => {
//   return async (dispatch: any) => {
//     dispatch(StartLoading());

//     try {
//       let cookie = await GetCookie();

//       let response = await axiosAPI.post(
//         `ocapi/account/login&cookie=${cookie}`,
//         body,
//       );
//       let data = response.data;

//       if (data.hasOwnProperty('error_warning')) {
//         cb(false);
//         console.log('FAIL');
//         showMessage({
//           message: data['error_warning'],
//           type: 'danger',
//         });
//         dispatch(EndLoading());
//       } else {
//         dispatch(EndLoading());
//         console.log('SUCCESS');

//         const {
//           firstname,
//           lastname,
//           email,
//           telephone,
//           newsLetter,
//           access_token,
//         } = data;

//         console.log(
//           firstname,
//           lastname,
//           email,
//           telephone,
//           newsLetter,
//           access_token,
//         );

//         dispatch({
//           type: ActionType.LOAD_AUTH_DATA,
//           payload: {
//             firstname,
//             lastname,
//             email,
//             telephone,
//             newsLetter,
//             access_token,
//           },
//         });

//         const {currency, currencies, language, languages} = data;

//         saveItem(AsyncKeys.CURRENCY, currency?.code);
//         saveItem(AsyncKeys.LANGUAGE, language);
//         saveItem(AsyncKeys.USER_DATA, {
//           firstname,
//           lastname,
//           email,
//           telephone,
//           newsLetter,
//         });

//         //   dispatch({
//         //     type: SettingTypes.LOAD_APP_SETTINGS,
//         //     payload: {currency, currencies, language, languages},
//         //   });

//         dispatch({type: ActionType.LOG_USER_IN, payload: null});
//         //   dispatch(lodAcountPage());
//         dispatch(EndLoading());
//         cb(true);
//       }
//     } catch (error) {
//       dispatch(EndLoading());
//       cb(false);
//     }
//   };
// };
