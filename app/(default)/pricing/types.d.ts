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
interface Items{
    id:string;
    name:string;
    price:string;
    sectionId:string;
}
interface Sections {
    id:string;
    title:string;
    categoryId:string;
    items:Items[]
}
interface Category {
    id:string
    title: string
    sections: Sections[]
}