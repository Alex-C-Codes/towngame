import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function Homepage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "TownDefense/Build/TownDefense.loader.js",
    dataUrl: "TownDefense/Build/TownDefense.data",
    frameworkUrl: "TownDefense/Build/TownDefense.framework.js",
    codeUrl: "TownDefense/Build/TownDefense.wasm",
  });
  
  return (
    <div>
      {/* <Unity unityProvider={unityProvider} /> */}
      <Unity unityProvider={unityProvider} style={{width:960, height:540}} />
      {/* <Unity unityProvider={unityProvider} width="100%" height="100%" /> */}
      {/* <Unity unityProvider={unityProvider} style={{width:1920, height:1080}} /> */}
    </div>
  );

}
