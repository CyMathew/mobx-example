import React from 'react';
import InsideView from './InsideView';
import OutsideView from './OutsideView';

function App() {
    return (
        <div>

            <h1>Welcome to MobX Example</h1>

            <OutsideView></OutsideView>
            <InsideView></InsideView>
        </div>
    )
};

export default App;