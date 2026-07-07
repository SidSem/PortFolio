import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/desktop_fallback.png"
            alt="3D Scene Fallback"
            className="w-full h-full object-contain max-h-[320px] sm:max-h-full"
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
