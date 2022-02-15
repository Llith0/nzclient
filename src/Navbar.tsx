import './Navbar.css';
import Bars from '@iconscout/react-unicons/icons/uil-bars';
import ReactLogo from '@iconscout/react-unicons/icons/uil-react'
import Search from "@iconscout/react-unicons/icons/uil-search"
import profile from './default-profile-pic.jpg'
import React from 'react';

type navbarProps = {
  handleMenuClick: any;
  handleProfileClick: any; 
}


class Navbar extends React.Component<navbarProps> {
  constructor(props: navbarProps) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div className='top-0 w-full p-4'>
      <div className='flex center items-center space-x-8'>
        <div className="flex-none">
          <Bars color={"#FFFFFF"} onClick={this.props.handleMenuClick} size="32" className='cursor-pointer'/>
        </div>
        <div className="flex-none">
          <ReactLogo color="#FFFFFF" size="32" className='cursor-pointer'/>
        </div>
        <div className="flex-auto">
          <div className="hidden sm:block max-w-lg mx-auto">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search color="#FFFFFF" size="18" className='ml-auto mr-0'/>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block dark:bg-slate-600 bg-white w-full border dark:border-slate-700 border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none dark:focus:border-black dark:focus:ring-black focus:border-sky-500 focus:ring-sky-500 focus:ring-1 dark:focus:ring-2 sm:text-sm" placeholder="Rechercher une musique, un artiste, ..." type="text" name="search"/>
          </label>
          </div>
          <div className="block sm:hidden">
            <Search color="#FFFFFF" size="32" className='ml-auto mr-0 cursor-pointer'/>
          </div>
        </div>
        <div className="flex-none relative ml-auto">
          <div onClick={this.props.handleProfileClick} className="rounded-full h-9 w-9 ml-auto mr-0 cursor-pointer" style={{backgroundImage: "url( " + profile + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Navbar;
