import { useState, useEffect } from 'react';
import { SystemHealth, PerformanceMetric } from '@/types/analytics';
import { toast } from 'sonner';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    cpu: 0,
    memory: 0,
    latency: 0,
    errorRate: 0,
    timestamp: new Date()
  });

  useEffect(() => {
    // Monitor Performance API metrics
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const metric: PerformanceMetric = {
          id: crypto.randomUUID(),
          timestamp: new Date(),
          type: "loading",
          value: entry.duration,
          description: entry.name
        };

        setMetrics(prev => [...prev, metric]);

        if (entry.duration > 3000) {
          toast.warning(`Slow performance detected: ${entry.name}`);
        }
      });
    });

    observer.observe({ entryTypes: ['resource', 'navigation'] });

    // Simulate system health monitoring
    const interval = setInterval(() => {
      setSystemHealth({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        latency: Math.random() * 200,
        errorRate: Math.random() * 5,
        timestamp: new Date()
      });
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return {
    metrics,
    systemHealth,
    clearMetrics: () => setMetrics([])
  };
};