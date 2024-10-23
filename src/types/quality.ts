export interface TestResult {
  id: string;
  component: string;
  status: "passed" | "failed" | "pending";
  duration: number;
  timestamp: Date;
  errorMessage?: string;
}

export interface UXMetric {
  id: string;
  type: "click" | "navigation" | "load" | "interaction";
  path: string;
  duration: number;
  timestamp: Date;
  successful: boolean;
}

export interface UserFeedback {
  id: string;
  page: string;
  rating: number;
  comment?: string;
  timestamp: Date;
}

export interface QualityScore {
  performance: number;
  accessibility: number;
  usability: number;
  reliability: number;
}