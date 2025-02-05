import { Component } from "react";
import type { ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p className="error-message">Something went wrong!</p>;
    }
  }
}

export default ErrorBoundary;
