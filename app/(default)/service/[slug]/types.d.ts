interface FeatureDetail {
  id: string;
  content: string;
  featureId: string;
}

interface ServiceFeature {
  id: string;
  title: string;
  image: string | null;
  serviceId: string;
  details: FeatureDetail[];
}

interface ServiceSlide {
  id: string;
  title: string;
  url: string;
  desc: string | null;
  slug: string | null;
}
 interface FullService {
  id: string;
  title: string;
  url: string;
  desc: string | null;
  slug: string | null;
  features: {
    id: string;
    title: string;
    image: string | null;
    serviceId: string;
    details: FeatureDetail[];
  }[];
}
