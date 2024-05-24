import { Platform } from "react-native";

export const isWeb = Platform.OS === 'web';
export const isWindows = Platform.OS === 'windows';
export const isMacOS = Platform.OS === 'macos';
export const isAndroid = Platform.OS === 'android';
export const isiOS = Platform.OS === 'ios';
export const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';