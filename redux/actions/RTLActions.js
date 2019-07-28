import Constants from '../../assets/constants'
import { I18nManager } from 'react-native'

export const RTLActions = () => {
    console.log(I18nManager.isRTL)
    return {type: Constants.IS_RTL, payload: I18nManager.isRTL ? 'RTL' : 'LTR'}
}
