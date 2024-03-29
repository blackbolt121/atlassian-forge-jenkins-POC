import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    return (
        <div>
            {data ? data : 'Loading...'}
            <div>Testing github webhooks 2</div>
        </div>
        
    );
}

export default App;
