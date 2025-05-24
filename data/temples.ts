export interface Temple {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  video360Url: string;
}

export const temples: Temple[] = [
  {
    id: 1,
    name: "Tirupati Balaji",
    location: "Andhra Pradesh",
    description: "Famous Hindu temple dedicated to Lord Venkateswara.",
    imageUrl: "/images/tirupati.jpg",
    video360Url: "https://www.youtube.com/embed/your-360-video-link",
  },
  {
    id: 2,
    name: "Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh",
    description: "One of the most famous Shiva temples in India.",
    imageUrl: "/images/kashi.jpg",
    video360Url: "https://www.youtube.com/embed/your-360-video-link",
  },
  // Add more temples here
];
