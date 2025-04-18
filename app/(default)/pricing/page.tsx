import { CategoryDetails, PlanPriceDetails } from '@/utils'
import Link from 'next/link'

export default async function PricingPage() {
  const priceCategories = await PlanPriceDetails()
  const categories = await CategoryDetails()

  return (
    <main className="min-h-screen mt-10 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl text-center mb-16">PRICE-LIST</h1>
        
        {/* Vak tjenester */}
        <section className="mb-16">
          <h2 className="text-2xl  mb-8">VÅR TJENESTER</h2>
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-4">
            {priceCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-medium mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between">
                      <span className="text-sm">{item.name}</span>
                      <span className="text-sm">NOK {item.price},-</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other categories */}
        {categories.map((category) => (
          <section key={category.title} className="mb-16">
            <h2 className="text-2xl  mb-8">{category.title}</h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-4">
              {category.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-medium mb-4">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex justify-between">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm">NOK {item.price},-</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

// const priceCategories = [
//   {
//     title: "Dress",
//     items: [
//       { name: "Legg opp/ned", price: "450" },
//       { name: "Innsying enkel", price: "450" },
//       { name: "Innsying krevende", price: "600" },
//       { name: "Legge inn/ut", price: "450" },
//     ]
//   },
//   {
//     title: "Bukser",
//     items: [
//       { name: "Legg opp/ned", price: "250" },
//       { name: "Innsying", price: "250" },
//       { name: "Legge ut", price: "250" },
//       { name: "Skifte glidelås", price: "250" },
//     ]
//   },
//   {
//     title: "Skjorter",
//     items: [
//       { name: "Innsying", price: "350" },
//       { name: "Forkorte ermer", price: "250" },
//       { name: "Legge ut", price: "250" },
//     ]
//   }
// ]

// const categories = [
//   {
//     title: "UNDERTØY",
//     sections: [
//       {
//         title: "BH",
//         items: [
//           { name: "Stramme stropper", price: "150" },
//           { name: "Skifte spenne", price: "200" },
//           { name: "Innsying", price: "250" },
//         ]
//       },
//       // Add more sections and items based on the image
//     ]
//   },
//   // Add more categories based on the image
// ]
