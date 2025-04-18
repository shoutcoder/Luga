"use server"

import prisma from "@/lib/prisma";

interface FaqData {
    id:string,
    question: string,
    answer: string,
}
export const FaqDetails = async ():Promise<FaqData[]>=>{
    try{
        const Faqs = await prisma.faq.findMany({
            select:{
                id:true,
                question:true,
                answer:true,
            }
        })
        return Faqs;
    }
    catch(err){
        return []
    }
}
/** update an FAQ */
export const updateFaq = async (
    id: string,
    data: Omit<FaqData, 'id'>
  ): Promise<{ success: boolean; error?: any }> => {
    try {
      await prisma.faq.update({
        where: { id },
        data: { question: data.question, answer: data.answer },
      })
      return { success: true }
    } catch (error) {
      console.error("update FAQ error", error)
      return { success: false, error }
    }
  }
  
  /** create a new FAQ */
  export const createFaq = async (
    data: Omit<FaqData, 'id'>
  ): Promise<{ success: boolean; faq?: FaqData; error?: any }> => {
    try {
      const faq = await prisma.faq.create({ data })
      return { success: true, faq }
    } catch (error) {
      console.error("create FAQ error", error)
      return { success: false, error }
    }
  }
  
  /** delete an FAQ */
  export const deleteFaq = async (
    id: string
  ): Promise<{ success: boolean; error?: any }> => {
    try {
      await prisma.faq.delete({ where: { id } })
      return { success: true }
    } catch (error) {
      console.error("delete FAQ error", error)
      return { success: false, error }
    }
  }
  
