import Head from 'next/head'
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../utils/helpers'
import { fetchInventory } from '../utils/inventoryProvider'
import CartLink from '../components/CartLink'

const Home = ({ inventoryData = [], categories: categoryData = [] }) => {
  const inventory = inventoryData.slice(0, 4)
  const categories = categoryData.slice(0, 2)

  return (
    <>
      <CartLink />
      <div className="w-full">
        <Head>
          <title>De Tort</title>
          <meta name="description" content="De Tort - Pastries in Tallinn." />
          <meta property="og:title" content="De Tort" key="title" />
        </Head>
        <div className="bg-green-200
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col">
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <Center
              price="2,50"
              title={inventory[2].name}
              link={`/product/${slugify(inventory[2].name)}`}
            />
            <Footer
              designer="De Tort"
            />
          </div>
          <div className="flex flex-1 justify-center items-center relative">
              <Showcase
                imageSrc={inventory[2].image}
              />
              <div className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full" />
          </div>
        </div>
      </div>
      <div className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      ">
        <DisplayMedium
          imageSrc={categories[0].image}
          subtitle={`${categories[0].itemCount} items`}
          title={titleIfy(categories[0].name)}
          link={`/category/${slugify(categories[0].name)}`}
        />
        <DisplayMedium
          imageSrc={categories[1].image}
          subtitle={`${categories[1].itemCount} items`}
          title={titleIfy(categories[1].name)}
          link={`/category/${slugify(categories[1].name)}`}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">Find the most delicious pastries for you.</p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[0].image}
          title={inventory[0].name}
          subtitle={inventory[0].categories[0]}
          link={`/product/${slugify(inventory[0].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[1].image}
          title={inventory[1].name}
          subtitle={inventory[1].categories[0]}
          link={`/product/${slugify(inventory[1].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[2].image}
          title={inventory[2].name}
          subtitle={inventory[2].categories[0]}
          link={`/product/${slugify(inventory[2].name)}`}
        />

        <DisplaySmall
          imageSrc={inventory[3].image}
          title={inventory[3].name}
          subtitle={inventory[3].categories[0]}
          link={`/product/${slugify(inventory[3].name)}`}
        />
      </div>

      <div className="pt-10 pb-6 flex flex-col items-start">
        <h2 className="text-4xl mb-3"></h2>
      </div>
      <div className="pt-10 pb-6 flex flex-col items-start">
        <h2 className="text-4xl mb-3">Instagram</h2>
        <a className="text-gray-600 text-xl" target="_blank" href="https://www.instagram.com/de_tort_/">de_tort_</a>
      </div>
      <div className="pt-10 pb-6 flex flex-col items-start">
        <h2 className="text-4xl mb-3">Email</h2>
        <a className="mailto text-gray-600 text-xl" href="mailto:info@de-tort.ee">info@de-tort.ee</a>
      </div>
      <div className="pt-10 pb-6 flex flex-col items-start">
        <h2 className="text-4xl mb-3">Tootamet</h2>
        <a className="text-gray-600 text-xl">
          teisipäevast reedeni 15:00 - 18:00</a>
        <a className="text-gray-600 text-xl">
          llaupäeval 11:00 - 17:00</a>
      </div>
      <div className="pt-10 pb-6 flex flex-col items-start">
        <h2 className="text-4xl mb-3">Aadressil</h2>
        <a className="text-gray-600 text-xl" target="_blank" href="https://goo.gl/maps/5R4MnNRU7tGQ6Mh28">Pelguranna 3</a>
        <a className="text-gray-600 text-xl" target="_blank" href="https://goo.gl/maps/5R4MnNRU7tGQ6Mh28">10312 Tallinn</a>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const inventory = await fetchInventory()
  
  const inventoryCategorized = inventory.reduce((acc, next) => {
    const categories = next.categories
    categories.forEach(c => {
      const index = acc.findIndex(item => item.name === c)
      if (index !== -1) {
        const item = acc[index]
        item.itemCount = item.itemCount + 1
        acc[index] = item
      } else {
        const item = {
          name: c,
          image: next.image,
          itemCount: 1
        }
        acc.push(item)
      }
    })
    return acc
  }, [])
  
  return {
    props: {
      inventoryData: inventory,
      categories: inventoryCategorized
    }
  }
}

export default Home