import React from 'react'

React.Component.prototype.$log = function ( ...log ) {
    console.log ( ...log );
}