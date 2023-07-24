import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function Homepage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/TownDefense/build/TownDefense.loader.js",
    dataUrl: "/TownDefense/build/TownDefense.data",
    frameworkUrl: "/TownDefense/build/TownDefense.framework.js",
    codeUrl: "/TownDefense/build/TownDefense.wasm",
  });
  
  return (
    <div>
      <Unity unityProvider={unityProvider} style={{width:960, height:540}} />
      {/* <Unity unityProvider={unityProvider} width="100%" height="100%" /> */}
      {/* <Unity unityProvider={unityProvider} style={{width:1920, height:1080}} /> */}
    </div>
  );

}
