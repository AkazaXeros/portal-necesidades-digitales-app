import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Update state when an error occurs
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // If there's an error, render the provided fallback component
      return (
        <this.props.FallbackComponent
          error={this.state.error}
          componentStack={this.state.errorInfo.componentStack}
        />
      );
    }

    // If no error occurred, render the children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
