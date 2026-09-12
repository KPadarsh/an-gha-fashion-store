import React from "react";
import { notFound } from "next/navigation";
import { ProductBreadcrumb } from "@/components/product/ProductBreadcrumb";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfoPanel } from "@/components/product/ProductInfoPanel";
import { ProductStorySection } from "@/components/product/ProductStorySection";
import { ProductTactileIndex } from "@/components/product/ProductTactileIndex";
import { ProductComplementGrid } from "@/components/product/ProductComplementGrid";
import { ProductRecentlyViewed } from "@/components/product/ProductRecentlyViewed";
import { ProductNewsletter } from "@/components/product/ProductNewsletter";
import { FEATURED_SPECIMEN } from "@/data/productDetailData";
import { SHOP_PRODUCTS } from "@/data/shopProducts";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return SHOP_PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Locate the product in catalog or fall back to the featured specimen
  const matchedShopProduct = SHOP_PRODUCTS.find((p) => p.id === id);
  const specimen = FEATURED_SPECIMEN; // Authoritative specimen from Stitch design

  // If matched from shop, customize title & price if available
  const productData = matchedShopProduct
    ? {
        ...specimen,
        id: matchedShopProduct.id,
        name: matchedShopProduct.name,
        price: matchedShopProduct.price,
        category: matchedShopProduct.category,
        categoryLine: `ARCHIVE ${matchedShopProduct.category} · SPECIMEN ${matchedShopProduct.indexNumber.slice(0, 2)}`,
      }
    : specimen;

  return (
    <main className="flex-1 w-full bg-[#FAF6F1] pb-16 md:pb-0">
      {/* 1. Editorial Breadcrumb */}
      <ProductBreadcrumb
        category={productData.category}
        specimenNumber={productData.specimenNumber}
        atelier={productData.atelier}
      />

      {/* 2. Signature Hero Layout (7:5 Split) */}
      <section className="max-w-[1440px] mx-auto px-0 md:px-12 py-0 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 items-start">
          {/* Left Column (7 parts): Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery gallery={productData.gallery} />
          </div>

          {/* Right Column (5 parts): Info Panel */}
          <div className="lg:col-span-5 px-4 md:px-0">
            <ProductInfoPanel
              productId={productData.id}
              imageUrl={productData.gallery?.[0]?.imageUrl}
              categoryLine={productData.categoryLine}
              stockStatus={productData.stockStatus}
              name={productData.name}
              price={productData.price}
              currency={productData.currency}
              edition={productData.edition}
              description={productData.description}
              colors={productData.colors}
              sizes={productData.sizes}
              measurements={productData.measurements}
              accordions={productData.accordions}
            />
          </div>
        </div>
      </section>

      {/* 3. Editorial Story Block (Craftsmanship & Movement) */}
      <ProductStorySection
        chapter={productData.story.chapter}
        title={productData.story.title}
        paragraphs={productData.story.paragraphs}
        imageUrl={productData.story.imageUrl}
        tagSeries={productData.story.tagSeries}
        tagLocation={productData.story.tagLocation}
        specs={productData.story.specs}
      />

      {/* 4. Fabric Texture Gallery (3 Horizontal Imagery Cards) */}
      <ProductTactileIndex
        chapter={productData.tactileIndex.chapter}
        title={productData.tactileIndex.title}
        cards={productData.tactileIndex.cards}
      />

      {/* 5. Complete The Silhouette (4-Col Commerce Grid) */}
      <ProductComplementGrid
        chapter={productData.complements.chapter}
        title={productData.complements.title}
        items={productData.complements.items}
      />

      {/* 6. Recently Examined Specimens (4 Items) */}
      <ProductRecentlyViewed
        chapter={productData.recentlyViewed.chapter}
        count={productData.recentlyViewed.count}
        items={productData.recentlyViewed.items}
      />

      {/* 7. Newsletter & Archival Dispatch Block */}
      <ProductNewsletter />
    </main>
  );
}
