export interface WorkItem {
  sector: string;
  title: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
}

// Delivered by SentiaLab.
export const clientWork: WorkItem[] = [
  {
    sector: 'Transportation',
    title: 'Wheel counting for free-flow tolling',
    description:
      'A free-flow tolling system needed to count vehicle wheels from highway RTSP cameras in real time. We built the annotation workflow, trained the detection models and wrote the C++20 pipeline, deployed on Jetson Orin NX for production use on highways.',
    stack: ['C++20', 'GStreamer', 'DeepStream', 'YOLO', 'TensorRT'],
  },
  {
    sector: 'Healthcare',
    title: 'Action detection for elderly care',
    description:
      'Software for elderly care needed to detect actions and events to help nurses and caretakers. We trained and tested the neural networks, ported the software to Jetson devices and integrated C++ and Rust for performance-critical paths.',
    stack: ['PyTorch', 'CUDA', 'C++', 'Rust', 'Yocto'],
  },
  {
    sector: 'Research',
    title: 'Vehicle classification with CNNs',
    description:
      'Research on classifying vehicle categories from optical-curtain profiles with convolutional neural networks, co-authored and published in IEEE Access (2024).',
    stack: ['PyTorch', 'OpenCV'],
    link: { label: 'Read the paper', href: 'https://doi.org/10.1109/ACCESS.2024.3410160' },
  },
];

// The founder's engineering work before SentiaLab.
export const earlierWork: WorkItem[] = [
  {
    sector: 'Automotive',
    title: 'Connected vehicle control over CAN J1939',
    description:
      'An IoT system in which several in-vehicle controllers communicate over CAN J1939 to operate safely and send data to the cloud. C++ applications for embedded Linux, Yocto recipes, and the packaging, build and unit-test setup.',
    stack: ['C++', 'Yocto', 'CAN J1939', 'CMake', 'Google Test'],
  },
  {
    sector: 'Semiconductor',
    title: 'Sensor software for semiconductor equipment',
    description:
      'Software for a sensor subsystem in semiconductor manufacturing machines: hardware integration, integration across subsystems, the internal testing framework and the CI/CD pipelines.',
    stack: ['C', 'C++', 'Python', 'GitHub Actions'],
  },
  {
    sector: 'Industrial IoT',
    title: 'Machine-monitoring gateway for OEE',
    description:
      'A gateway that collects data from industrial machinery for Industry 4.0 integration, with software to analyse overall equipment effectiveness. Electronics, firmware, and the data collection and analysis software.',
    stack: ['C/C++', 'ESP32', 'Python', 'C#'],
  },
];
