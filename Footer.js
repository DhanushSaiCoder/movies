import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home'
        };
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
        this.props.onTabClick(tab);
    };

    render() {
        const { activeTab } = this.state;

        return (
            <div className='footerDiv'>
                <img
                    className={`navImg ${activeTab === 'upcoming' ? 'active' : ''}`}
                    src='uComing.png'
                    onClick={() => this.handleTabClick('upcoming')}
                    alt='Upcoming'
                />

                <img
                    className={`navImg ${activeTab === 'home' ? 'active' : ''}`}
                    id='homeImg'
                    src='home.png'
                    onClick={() => this.handleTabClick('home')}
                    alt='Home'
                />

                {/* Add the click handler for the 'leaderboard' tab */}
                <img
                    className={`navImg ${activeTab === 'leaderboard' ? 'active' : ''}`}
                    src='lBoard.png'
                    onClick={() => this.handleTabClick('leaderboard')}
                    alt='Leaderboard'
                />
            </div>
        );
    }
}

export default Footer;