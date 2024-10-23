import { useState, useEffect } from 'react';
import { TestResult, UXMetric, QualityScore } from '@/types/quality';
import { toast } from 'sonner';

export const useQualityMetrics = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [uxMetrics, setUXMetrics] = useState<UXMetric[]>([]);
  const [qualityScore, setQualityScore] = useState<QualityScore>({
    performance: 0,
    accessibility: 0,
    usability: 0,
    reliability: 0
  });

  useEffect(() => {
    // Simulate test results
    const mockTestResults: TestResult[] = [
      {
        id: '1',
        component: 'Navigation',
        status: 'passed',
        duration: 45,
        timestamp: new Date()
      },
      {
        id: '2',
        component: 'Authentication',
        status: 'passed',
        duration: 120,
        timestamp: new Date()
      },
      {
        id: '3',
        component: 'Form Validation',
        status: 'failed',
        duration: 67,
        timestamp: new Date(),
        errorMessage: 'Validation timeout exceeded'
      }
    ];

    // Simulate UX metrics
    const mockUXMetrics: UXMetric[] = [
      {
        id: '1',
        type: 'navigation',
        path: '/dashboard',
        duration: 234,
        timestamp: new Date(),
        successful: true
      },
      {
        id: '2',
        type: 'interaction',
        path: '/customize',
        duration: 89,
        timestamp: new Date(),
        successful: true
      }
    ];

    setTestResults(mockTestResults);
    setUXMetrics(mockUXMetrics);

    // Calculate quality scores
    setQualityScore({
      performance: 92,
      accessibility: 88,
      usability: 95,
      reliability: 90
    });
  }, []);

  const recordUXMetric = (metric: Omit<UXMetric, 'id' | 'timestamp'>) => {
    const newMetric: UXMetric = {
      ...metric,
      id: crypto.randomUUID(),
      timestamp: new Date()
    };
    setUXMetrics(prev => [...prev, newMetric]);

    if (!metric.successful) {
      toast.error(`UX Issue detected: ${metric.type} on ${metric.path}`);
    }
  };

  return {
    testResults,
    uxMetrics,
    qualityScore,
    recordUXMetric
  };
};