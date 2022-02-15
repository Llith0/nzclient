import React from "react";
import MusicSection from "./MusicSection";
import Navbar from "./Navbar";
import NavigationMenu from "./NavigationMenu";
import ProfileMenu from "./ProfileMenu";

type WrapperProps = {
};

type WrapperState = {
    isMenuDeployed: boolean;
    isProfileDeployed: boolean;
};

class Wrapper extends React.Component<  WrapperProps, WrapperState> {
    constructor(props: WrapperProps) {
        super(props)
        this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
        this.handleClickOnProfile = this.handleClickOnProfile.bind(this);
    }
    state: WrapperState = {
        isMenuDeployed: false,
        isProfileDeployed: false
    };

    handleClickOnMenu() {
        this.setState({isMenuDeployed: !this.state.isMenuDeployed});
    }

    handleClickOnProfile() {
        this.setState({isProfileDeployed: !this.state.isProfileDeployed});
    }

    render() {
        return (
            <>
                <Navbar handleMenuClick={this.handleClickOnMenu} handleProfileClick={this.handleClickOnProfile} />
                <div className="flex flex-row mt-2">
                    <div className={this.state.isMenuDeployed? "flex-none basis-1/6" : "hidden"}>
                        <NavigationMenu />
                    </div>
                    <div className="flex-grow">
                        <MusicSection sectionTitle="Nouveautés" sectionDescription="Nouvelles musiques ajoutées" />
                    </div>
                    <div className={this.state.isProfileDeployed? "flex-none basis-1/6" : "hidden"}>
                        <ProfileMenu />
                    </div>
                </div>
            </>
        )
    }
};

export default Wrapper;