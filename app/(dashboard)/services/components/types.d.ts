export interface FeatureDetail {
    id: string;
    content: string;
    featureId: string;
  }
  
  export interface ServiceFeature {
    id: string;
    title: string;
    image: string;
    serviceId: string;
    details: FeatureDetail[];
  }
  
  export interface ServiceSlide {
    id: string;
    title: string;
    url: string;
    desc: string | null;
    slug: string | null;
  }