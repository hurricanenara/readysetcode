import React from 'react';

const withClass = (WrappedComponent, className) => {
    // you can't pass in props={props} as props is a single object and it will overwrite and result in missing data/props
    return props => {
        console.log(props);
        return <div className={className}>
            <WrappedComponent {...props} />
        </div>
    }
}

export default withClass;