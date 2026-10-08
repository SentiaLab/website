export interface WorkItem {
  industry: string;
  title: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
}

export const work: WorkItem[] = [
  {
    industry: 'Transportation',
    title: 'Wheel counting for free-flow tolling',
    description:
      'Detection models count vehicle wheels from highway RTSP cameras in real time. I built the annotation workflow, trained the models and wrote the C++20 pipeline, deployed on Jetson Orin NX for production use on highways.',
    stack: ['C++20', 'GStreamer', 'DeepStream', 'YOLO', 'TensorRT'],
  },
  {
    industry: 'Healthcare',
    title: 'Action detection for elderly care',
    description:
      'Neural networks that detect actions and events of elderly people to help nurses and caretakers. I trained and tested the models, ported the software to Jetson devices and integrated C++ and Rust for performance-critical paths.',
    stack: ['PyTorch', 'CUDA', 'C++', 'Rust', 'Yocto'],
  },
  {
    industry: 'Research',
    title: 'Vehicle classification with CNNs',
    description:
      'Co-authored research on classifying vehicle categories from optical-curtain profiles with convolutional neural networks, published in IEEE Access (2024).',
    stack: ['PyTorch', 'OpenCV'],
    link: { label: 'Read the paper', href: 'https://doi.org/10.1109/ACCESS.2024.3410160' },
  },
  {
    industry: 'Automotive',
    title: 'Connected vehicle control over CAN J1939',
    description:
      'An IoT system in which several in-vehicle controllers communicate over CAN J1939 to operate safely and send data to the cloud. I developed the C++ applications for embedded Linux, maintained the Yocto recipes and set up packaging, build and unit testing.',
    stack: ['C++', 'Yocto', 'CAN J1939', 'CMake', 'Google Test'],
  },
  {
    industry: 'Semiconductor',
    title: 'Sensor software for semiconductor equipment',
    description:
      'Software for a sensor subsystem in semiconductor manufacturing machines. I worked on hardware integration, integration across subsystems, the internal testing framework and the CI/CD pipelines.',
    stack: ['C', 'C++', 'Python', 'GitHub Actions'],
  },
  {
    industry: 'Industrial IoT',
    title: 'Machine-monitoring gateway for OEE',
    description:
      'A gateway that collects data from industrial machinery for Industry 4.0 integration, with software to analyse overall equipment effectiveness. I developed the electronics, the firmware and the data collection and analysis software.',
    stack: ['C/C++', 'ESP32', 'Python', 'C#'],
  },
];
