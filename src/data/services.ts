export interface Service {
  title: string;
  summary: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: 'Edge AI',
    summary:
      'We design, train and deploy optimized neural networks for real-time inference, on constrained edge hardware or wherever the workload runs best.',
    deliverables: [
      'Custom model training for your use case',
      'Model export and optimization for the target runtime',
      'Deployment on embedded GPUs and edge devices',
      'Real-time video analytics pipelines',
    ],
  },
  {
    title: 'Computer vision',
    summary: 'Full vision pipelines, from data collection and annotation to training and deployment.',
    deliverables: [
      'Object detection and classification',
      'Action recognition',
      'Annotation pipeline setup and management',
      'Production-grade vision applications',
    ],
  },
  {
    title: 'Embedded systems',
    summary:
      'Reliable software for constrained platforms: embedded Linux applications, firmware and hardware integration.',
    deliverables: [
      'Embedded Linux applications and custom images',
      'Firmware development',
      'Industrial and vehicle bus integration',
      'Cross-compilation and packaging',
    ],
  },
  {
    title: 'MLOps and deployment',
    summary:
      'The infrastructure that takes a model from a notebook to production, on a device, on-premises or in the cloud.',
    deliverables: [
      'CI/CD pipelines for models and software',
      'Containerized build and runtime environments',
      'Automated testing and validation',
      'Cluster orchestration for development and production',
    ],
  },
];
