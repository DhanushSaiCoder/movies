import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Drama from './components/Drama.js';
import ActionThriller from './Components/ActionThriller.js';
import Horror from './Components/Horror.js';
import Footer from './Footer.js';
import Romance from './Components/Romance.js';
import Upcoming from './Components/Upcoming.js';
import Lb from './Components/Lb.js'; // Import the lb component

function App() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header/>

            {activeTab === 'home' && (
                <div className='main'>
                    <ActionThriller genreName='Action / Thriller'/>
                    <Romance genreName='Romance'/>
                    <Drama genreName='Drama'/>
                    <Horror genreName='Horror'/>
                </div>
            )}

            {activeTab === 'upcoming' && <Upcoming />}
            
            {/* Render the lb component if the active tab is 'leaderboard' */}
            {activeTab === 'leaderboard' && <Lb />}

            <Footer onTabClick={handleTabClick} />
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('react-app'));