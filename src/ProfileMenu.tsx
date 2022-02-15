import React from 'react';
import User from '@iconscout/react-unicons/icons/uil-user'

class ProfileMenu extends React.Component {
    render() {
        return (
            <div className="bg-slate-800">
                <div className="items-center p-5">
                    <h2 className="pb-4">Test User</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center"><User color="#FFFFFF" size="32" className="pr-2"/> Profile</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default ProfileMenu;