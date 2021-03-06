import React, { Component } from 'react';
import { ErrorIndicator } from '..';

class ErrorBoundry extends Component {
    state = {
        isError: false,
    }

    componentDidCatch() {
        this.setState({ isError: true });
    }

    render() {
        const { isError } = this.state;
        if (isError) return <ErrorIndicator />

        return this.props.children;
    }
}

export default ErrorBoundry;