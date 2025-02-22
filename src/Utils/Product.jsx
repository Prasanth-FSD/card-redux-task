import React, { useState } from 'react'

export const ProductContext = React.createContext(null);

function Product({ children }) {
    //useState to update the state value
     const [data, setData] = useState({
       products: [
         {
           id: 1,
           title: "iPhone 9",
           description: "An apple mobile which is nothing like apple",
           price: 549,
           discountPercentage: 12.96,
           rating: 4.69,
           stock: 94,
           brand: "Apple",
           category: "smartphones",
           thumbnail:
             "https://i5.walmartimages.com/asr/d38e7b28-fef6-4ceb-958f-e173f3fff5d9_1.732168e7f156869227531a1d8501efd0.jpeg",
           images: [
             "https://i.dummyjson.com/data/products/1/1.jpg",
             "https://i.dummyjson.com/data/products/1/2.jpg",
             "https://i.dummyjson.com/data/products/1/3.jpg",
             "https://i.dummyjson.com/data/products/1/4.jpg",
             "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
           ],
         },
         {
           id: 2,
           title: "iPhone X",
           description:
             "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
           price: 899,
           discountPercentage: 17.94,
           rating: 4.44,
           stock: 34,
           brand: "Apple",
           category: "smartphones",
           thumbnail:
             "https://4.bp.blogspot.com/-wVqHwbeXjWI/To3x4IX_ugI/AAAAAAAAAPc/ckf0aQ10b6A/s4000/iphone-6.jpg",
           images: [
             "https://i.dummyjson.com/data/products/2/1.jpg",
             "https://i.dummyjson.com/data/products/2/2.jpg",
             "https://i.dummyjson.com/data/products/2/3.jpg",
             "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
           ],
         },
         {
           id: 3,
           title: "Samsung Universe 9",
           description:
             "Samsung's new variant which goes beyond Galaxy to the Universe",
           price: 1249,
           discountPercentage: 15.46,
           rating: 4.09,
           stock: 36,
           brand: "Samsung",
           category: "smartphones",
           thumbnail: "https://static.toiimg.com/photo/65350516.cms",
           images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
         },
         {
           id: 4,
           title: "OPPOF19",
           description: "OPPO F19 is officially announced on April 2021.",
           price: 280,
           discountPercentage: 17.91,
           rating: 4.3,
           stock: 123,
           brand: "OPPO",
           category: "smartphones",
           thumbnail:
             "https://daoinsights.com/wp-content/uploads/2020/12/oppo-reno-flip-5g-smartphone-1024x676.jpg",
           images: [
             "https://i.dummyjson.com/data/products/4/1.jpg",
             "https://i.dummyjson.com/data/products/4/2.jpg",
             "https://i.dummyjson.com/data/products/4/3.jpg",
             "https://i.dummyjson.com/data/products/4/4.jpg",
             "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
           ],
         },
         {
           id: 5,
           title: "Huawei P30",
           description:
             "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
           price: 499,
           discountPercentage: 10.58,
           rating: 4.09,
           stock: 32,
           brand: "Huawei",
           category: "smartphones",
           thumbnail:
             "https://media.metrolatam.com/2020/03/04/template8-0c0c5102464056bea82efb794d5ca106-1200x800.jpg",
           images: [
             "https://i.dummyjson.com/data/products/5/1.jpg",
             "https://i.dummyjson.com/data/products/5/2.jpg",
             "https://i.dummyjson.com/data/products/5/3.jpg",
           ],
         },
       ],
     });
  return (
      <>
          <ProductContext.Provider value={{ data, setData }}>
              {children}
         </ProductContext.Provider>
      </>
  )
}

export default Product 