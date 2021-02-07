import React from 'react';

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }
    render() {
        const { hasError} = this.state;
        if(hasError) {
            return <h1>Something Went Wrong</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;