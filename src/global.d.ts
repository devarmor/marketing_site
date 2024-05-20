// global.d.ts or types.d.ts

// Extend the Window interface
declare global {
  interface Window {
    amplitude: {
      init: (apiKey: string) => void;
      add: (plugin: any) => { promise: Promise<any> };
    };
    sessionReplay: {
      plugin: (options: { sampleRate: number }) => any;
    };
    amplitudeAutocapturePlugin: {
      plugin: () => any;
    };
  }
}

export {};
