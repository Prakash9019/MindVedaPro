declare module 'react-native-phone-call' {
    export default function call(args: {
      number: string;
      prompt?: boolean;
      skipCanOpen?: boolean;
    }): Promise<void>;
 }