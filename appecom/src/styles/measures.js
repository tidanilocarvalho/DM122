import { Platform } from 'react-native';

export default {
    padding: 15,
    margin: 5,
    highTabBar: 50,
    highSearchBar: 50,
    ...Platform.select({
        android: {
            headerHeigh: 44, headerPadding: 0

        },
        ios: {
            headerHeigh: 64, headerPadding: 20
        }
    })
}