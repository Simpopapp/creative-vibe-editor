export interface PerformanceMetric {
  id: string;
  timestamp: Date;
  type: "memory" | "loading" | "interaction" | "error";
  value: number;
  description: string;
}

export interface SecurityEvent {
  id: string;
  timestamp: Date;
  type: "authentication" | "authorization" | "validation" | "suspicious";
  severity: "low" | "medium" | "high";
  description: string;
  resolved: boolean;
}

export interface SystemHealth {
  cpu: number;
  memory: number;
  latency: number;
  errorRate: number;
  timestamp: Date;
}