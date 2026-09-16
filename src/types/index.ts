// Navbar section
export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink extends NavLink {
  icon: React.ReactNode;
}

// About section
export interface AboutPoints {
  heading1: string;
  heading2: string;
  heading3: string;
}

// Dishes section
export interface Dishes {
  id: string;
  img: string;
  title: string;
  price: string;
}

// Booking section
export interface BookingStepsProp {
  number: string;
  title: string;
  description: string;
}

// Testimonial section
export interface testimonialType {
  rating: number;
  review: string;
  name: string;
  location: string;
  avatar: string;
}

// Faq section
export interface faqsType {
  question: string;
  answer: string;
}

// CTA section
export interface CTATypes {
  src: string;
  alt: string;
  className: string;
}