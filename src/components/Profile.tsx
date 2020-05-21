import * as React from "react";

import { About } from './About';
import { Intro } from './Intro';
import { ColorControl } from './ColorControl';

// Color mode can be "light", "dark", or "pink"
export interface ProfileState { colorMode: string; }

export class Profile extends React.Component<{}, ProfileState> {
    constructor(props: any) {
        super(props);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.state = { colorMode: 'dark' };
    }

    handleColorChange(color: string) {
        this.setState({colorMode: color});
    }

    render() {
        return (
            <main>
                <Intro colorMode={this.state.colorMode}/>
                <ColorControl colorMode={this.state.colorMode}/>
                <About colorMode={this.state.colorMode}/>
                Color Mode is: {this.state.colorMode}
            </main>
        );
    }
}