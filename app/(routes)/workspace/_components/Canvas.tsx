import React, { useEffect, useState } from 'react';
import { Excalidraw, WelcomeScreen } from '@excalidraw/excalidraw';
import { FILE } from '../../dashboard/_components/FileList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function Canvas({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();
  const updateWhiteboard = useMutation(api.files.updateCanvas);

  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData)
    }).then(resp => console.log(resp));
  };

  return (
    <div className='h-screen'>
      {fileData && (
        <Excalidraw
          initialData={{
            elements: fileData?.whiteboard
              ? JSON.parse(fileData?.whiteboard)
              : [], // Fallback to an empty array if there's no valid whiteboard data
          }}
          onChange={(excalidrawElements, appState, files) => setWhiteBoardData(excalidrawElements)}
        >
          <WelcomeScreen>
            <WelcomeScreen.Hints.HelpHint />
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
}

export default Canvas;
