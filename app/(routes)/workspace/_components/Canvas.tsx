import React from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";


function Canvas() {
  return (
    <div className='h-screen'>
        <Excalidraw 
        onChange={(excalidrawElements, appState, files) => console.log(excalidrawElements)}
        >
         <WelcomeScreen>
            <WelcomeScreen.Hints.HelpHint/>
            <WelcomeScreen.Hints.MenuHint/>
            <WelcomeScreen.Hints.ToolbarHint/>
         </WelcomeScreen>
            </Excalidraw>/
      </div>
  )
}

export default Canvas