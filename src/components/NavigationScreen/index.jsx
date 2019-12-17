import React from 'react'
import { connect } from 'react-redux'

//pages
import Find from '../Find'

const NavigationScreen = ( { state } ) => {
    
    const Page = () => {
        switch (state.tab) {
            case 0:
                return <Find />
        
            default:
                break;
        }
    }
    return (
        <div>
            <Page />
        </div>
    )
};

export default connect( state=>({state:state}) ) (NavigationScreen);
