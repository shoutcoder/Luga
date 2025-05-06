import { CategoryDetails, PlanPriceDetails } from '@/utils'
import Link from 'next/link'

export default async function PricingPage() {
  // const priceCategories = await PlanPriceDetails()
  const categories = await CategoryDetails()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#fffde5] to-[#f9f7df] py-16 mb-12">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(150deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(30deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(150deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(60deg,_#4a5f4a77_25%,_transparent_25.5%,_transparent_75%,_#4a5f4a77_75%,_#4a5f4a77_0),_linear-gradient(60deg,_#4a5f4a77_25%,_transparent_25.5%,_transparent_75%,_#4a5f4a77_75%,_#4a5f4a77_0)] bg-[size:80px_140px]"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">PRISLISTE</h1>
          <p className="text-black/75 text-center max-w-2xl mx-auto">Priser er veiledende og kan variere fra plagg til plagg, omfanget av tjeneste, flekker/smuss. Kom gjerne innom for et mer presis estimat.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Vak tjenester */}
        {/* <section className="mb-16">
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
        </section> */}

        {/* Other categories */}
        {categories.map((category) => (
          <section key={category.title} className="mb-16">
            <h2 className="text-2xl  mb-5 text-center">{category.title}</h2>
            <hr />
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mt-4">
              {category.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-medium mb-4">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex justify-between pb-2">
                        <span className="text-sm font-normal">{item.name}</span>
                        <span className="text-sm">NOK {item.price}</span>
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
