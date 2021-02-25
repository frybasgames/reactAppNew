import React, { Component } from 'react'
import {Kokteyl} from './Kokteyl';
import {SearchBar} from './SearchBar';
export class Anasayfa extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <Kokteyl/>
            </div>
        )
    }
}
