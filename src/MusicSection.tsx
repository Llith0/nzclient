import React from 'react';

type MusicSectionProps = {
    sectionTitle: string;
    sectionDescription: string;
}

class MusicSection extends React.Component<MusicSectionProps> {
    render() {
        return (
            <>
            <div className='border-y-2 border-neutral-700 p-8'>
                <div className='space-y-1'>
                    <h3>{this.props.sectionTitle}</h3>
                    <h4 className='italic text-sm'>{this.props.sectionDescription}</h4>
                </div>
            </div>
            </>
        )
    };
};

export default MusicSection;