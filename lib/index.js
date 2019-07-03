import { NativeModules } from "react-native";

// import ShareExtension from 'react-native-share-extension'
// const { type, value } = await NativeModules.ShareExtension.data()
// NativeModules.ShareExtension.close()
export default {
  data: () => NativeModules.ReactNativeShareExtension.data(),
  dataiOS: appGroupId =>
    NativeModules.ReactNativeShareExtension.dataiOS(appGroupId),
  dataMulti: appGroupId =>
    NativeModules.ReactNativeShareExtension.dataMulti(appGroupId),
  close: () => NativeModules.ReactNativeShareExtension.close(),
  closeiOS: appGroupId =>
    NativeModules.ReactNativeShareExtension.closeiOS(appGroupId)
};
