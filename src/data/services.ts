export interface Service {
  title: string;
  summary: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: 'Edge AI',
    summary:
      'I design, train and deploy optimized neural networks on resource-constrained hardware, for real-time inference where the cloud is not an option.',
    deliverables: [
      'Custom model training for your use case',
      'Export and optimization with ONNX and TensorRT',
      'Deployment on NVIDIA Jetson',
      'Video analytics pipelines with GStreamer and DeepStream',
    ],
  },
  {
    title: 'Computer vision',
    summary: 'Full vision pipelines, from data collection and annotation to training and deployment.',
    deliverables: [
      'Object detection and classification',
      'Action recognition',
      'Annotation pipeline setup with CVAT',
      'Production C++ vision applications',
    ],
  },
  {
    title: 'Embedded systems',
    summary:
      'Reliable software for constrained platforms: embedded Linux applications, firmware and hardware integration.',
    deliverables: [
      'Embedded Linux applications and Yocto recipes',
      'Firmware in C and C++',
      'CAN J1939 integration',
      'Cross-compilation and packaging',
    ],
  },
  {
    title: 'MLOps and deployment',
    summary:
      'The infrastructure that takes a model from a notebook to a device: CI/CD, containers and automated testing.',
    deliverables: [
      'CI/CD with GitLab CI and GitHub Actions',
      'Docker build environments',
      'Automated unit testing',
      'Kubernetes for development and production',
    ],
  },
];
