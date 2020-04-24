import React from 'react'

const AsyncHComponent = loadComponent => (
    class AsyncHComponent extends React.Component {
        defaultPrivateName = 'AsyncHComponent'
        state = {
            Component : null ,
        }
    
        UNSAFE_componentWillMount () {
            if ( this.hasLoadedComponent () ) {
                return;
            }
            
            loadComponent ()
                .then ( module => module.default )
                .then ( ( Component ) => {
                    this.setState ( { Component } );
                } )
                .catch ( ( err ) => {
                    console.error ( `Cannot load component in <AsyncHComponent />` );
                    throw err;
                } );
        }
        
        hasLoadedComponent () {
            return this.state.Component !== null;
        }
        
        render () {
            const { Component } = this.state;
            return ( Component ) ? <Component { ...this.props } /> : null;
        }
    }
);

export default AsyncHComponent;