"use server"

import prisma from "@/lib/prisma"
// types/services.ts

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
export interface FullService {
  id: string;
  title: string;
  url: string;
  desc: string | null;
  slug: string | null;
  features: {
    id: string;
    title: string;
    image: string;
    serviceId: string;
    details: FeatureDetail[];
  }[];
}


// ---------------- ServiceFeature ----------------

// ----- GET all features for a service -----
export const getServiceFeatures = async (serviceId: string): Promise<ServiceFeature[]> => {
  try {
    const features = await prisma.serviceFeature.findMany({
      where: { serviceId },
      include: {
        details: true,
        
      },
      orderBy:{
        createdAt:"asc",
      }
    });
    return features;
  } catch (error) {
    console.error("getServiceFeatures error", error);
    return [];
  }
};
export const getService = async (serviceId: string): Promise<FullService | null> => {
  try {
    const features = await prisma.service.findUnique({
      where: { id:serviceId },
      include: {
        features:{
          include:{
            details:true
          },
          orderBy:{
            createdAt:"asc",
          }
        },
        
      },
      
    });
    return features;
  } catch (error) {
    console.error("getServiceFeatures error", error);
    return null;
  }
};

// ----- CREATE a new feature -----
export const createServiceFeature = async (
  serviceId: string,
  data: { title: string; image: string }
): Promise<{ success: boolean; feature?: ServiceFeature; error?: any }> => {
  try {
    const feature = await prisma.serviceFeature.create({
      data: {
        ...data,
        serviceId,
      },
      include: {
        details: true,
      },
      
    });
    return { success: true, feature };
  } catch (error) {
    console.error("createServiceFeature error", error);
    return { success: false, error };
  }
};

// ----- UPDATE a feature -----
export const updateServiceFeature = async (
  id: string,
  data: { title: string; image: string }
): Promise<{ success: boolean; error?: any }> => {
  try {
    await prisma.serviceFeature.update({
      where: { id },
      data,
    });
    return { success: true };
  } catch (error) {
    console.error("updateServiceFeature error", error);
    return { success: false, error };
  }
};

// ----- DELETE a feature -----
export const deleteServiceFeature = async (
  id: string
): Promise<{ success: boolean; error?: any }> => {
  try {
    await prisma.serviceFeature.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("deleteServiceFeature error", error);
    return { success: false, error };
  }
};

// ======= FEATURE DETAILS =======

// CREATE a detail
export const createFeatureDetail = async (
  featureId: string,
  content: string
): Promise<{ success: boolean; detail?: FeatureDetail; error?: any }> => {
  try {
    const detail = await prisma.featureDetail.create({
      data: {
        content,
        featureId,
      },
    });
    return { success: true, detail };
  } catch (error) {
    console.error("createFeatureDetail error", error);
    return { success: false, error };
  }
};

// UPDATE a detail
export const updateFeatureDetail = async (
  id: string,
  content: string
): Promise<{ success: boolean; error?: any }> => {
  try {
    await prisma.featureDetail.update({
      where: { id },
      data: { content },
    });
    return { success: true };
  } catch (error) {
    console.error("updateFeatureDetail error", error);
    return { success: false, error };
  }
};

// DELETE a detail
export const deleteFeatureDetail = async (
  id: string
): Promise<{ success: boolean; error?: any }> => {
  try {
    await prisma.featureDetail.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("deleteFeatureDetail error", error);
    return { success: false, error };
  }
};
