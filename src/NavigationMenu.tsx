import React from "react";
import House from "@iconscout/react-unicons/icons/uil-house-user";
import ArrowUp from "@iconscout/react-unicons/icons/uil-arrow-growth"
import Discover from "@iconscout/react-unicons/icons/uil-plus"

class NavigationMenu extends React.Component {

    render() {
        return (
            <div className="bg-slate-800">
                <div className="items-center p-5">
                    <h2 className="pb-4">Menu</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center"><House color="#FFFFFF" size="32" className="pr-2"/> Accueil</li>
                        <li className="flex items-center"><ArrowUp color="#FFFFFF" size="32" className="pr-2"/> Top</li>
                        <li className="flex items-center"><Discover color="#FFFFFF" size="32" className="pr-2"/> Découvrir</li>
                    </ul>
                </div>
            </div>
        )
    };

}

export default NavigationMenu;