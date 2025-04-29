"use server";

import prisma from "@/lib/prisma";

interface ServicesSlide {
  id: string;
  url: string;
  title: string;
  desc: string | null
  slug: string | null
}
export const OurServices = async (): Promise<ServicesSlide[]> => {
  try {
    const OurServices = await prisma.service.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        desc:true,
        slug:true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return OurServices;
  } catch (err) {
    return [];
  }
};

export const updateService = async (
  id: string,
  data: { title: string;url:string;desc:string }
): Promise<{ success: boolean; error?: any }> => {
  try {
    const slug = data.title.toLocaleLowerCase().split(" ").join("_");
    await prisma.service.update({
      where: { id },
      data: { title: data.title, url: data.url,slug:slug,desc:data.desc },
    });
    return { success: true };
  } catch (error) {
    console.error("update service error", error);
    return { success: false, error };
  }
};


// --------------------------------------------------------------------------------------
