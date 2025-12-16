import foodExpressImg from '../assets/food-express.png';
import messageAppImg from '../assets/message-app.png';
import infraCodeImg from '../assets/infra-code.png';

export const projectsData = [
    {
        id: 1,
        title: "FoodExpress Ecommerce",
        description: "A modern food delivery platform featuring a responsive UI, cart management, and seamless checkout experience.",
        image: foodExpressImg,
        link: "https://github.com/5zan-Code/FoodExpress-Ecommerce",
        tags: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
        id: 2,
        title: "MessageApp",
        description: "Real-time messaging application with instant notifications, group chats, and a sleek dark mode interface.",
        image: messageAppImg,
        link: "https://github.com/5zan-Code/MessageApp",
        tags: ["Socket.io", "React", "Express", "Real-time"]
    },
    {
        id: 3,
        title: "InfraAndCode",
        description: "Infrastructure as Code (IaC) repository demonstrating automated cloud provisioning and DevOps best practices.",
        image: infraCodeImg,
        link: "https://github.com/5zan-Code/InfraAndCode",
        tags: ["Terraform", "AWS", "Docker", "CI/CD"]
    },
     {
        id: 4,
        title: "Self-Healing Kubernetes Platform with GitOps and Chaos Engineering",
        description: "A production-ready, enterprise-grade self-healing Kubernetes platform with GitOps workflows and chaos engineering for reliability testing",
        image: infraCodeImg,
        link: "https://github.com/5zan-Code/Self-Healing-Kubernetes-Platform-with-GitOps-and-Chaos-Engineering",
        tags: ["Terraform", "AWS", "Docker", "K8s", "Grafana", "Prometheus"]
    }
];
