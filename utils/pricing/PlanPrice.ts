"use server"

import prisma from "@/lib/prisma";
interface PriceItem {
    id:string;
    name:string;
    price:string;
    categoryId:string,
}
interface PlanPrice {
    id:string
    title: string
    items: PriceItem[]
}
export const PlanPriceDetails = async ():Promise<PlanPrice[]>=>{
    try{
        const planPriceData = await prisma.priceCategory.findMany({
            select:{
                id:true,
                title:true,
                items:{
                    select:{
                        id:true,
                        name:true,
                        price:true,
                        categoryId:true,
                    }
                }
            },
           
            
        })
        return planPriceData;
    }
    catch(err){
        return []
    }
}