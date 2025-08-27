import { PER_PAGE } from './blog/page/[page]'
import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'
import Link from "next/link";

import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sections/PopularPosts";
import SubscribeSection from "@components/sections/Subscribe";
import Layouts from "@layouts/Layouts";

import { getSortedCategoriesData } from "@library/categories";
import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

import PopularsPostsData from "@data/sections/popular-posts.json";

const Blog = ( { posts, totalPosts, currentPage, categories, popular } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Exploring <span className=\"mil-thin\">the World</span> <br> Through Our <span className=\"mil-thin\">Blog</span>"} breadTitle={"Blog"} anchorLabel={"Publications"} anchorLink={"#blog"} paddingBottom={1} />

      <PopularPosts posts={popular} />

      {/* categories */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-60">
          <div className="row align-items-center">
              <div className="col-lg-12">
                  <h3 className="mil-center mil-up mil-mb-60">Explore Categories</h3>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <div className="mil-categories-slider mil-up">
                      <div className="mil-category-scroll-container">
                          <ul className="mil-category-list mil-horizontal-scroll">
                              <li><Link href="/blog" className="mil-active mil-category-item">All Categories</Link></li>
                              {categories.map((item, key) => (
                              <li key={`categories-item-${key}`}><Link href={`/blog/category/${item.id}`} className="mil-category-item">{item.title}</Link></li>
                              ))}
                          </ul>
                      </div>
                      <div className="mil-scroll-indicator">
                          <div className="mil-scroll-hint">Swipe to explore</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      {/* categories end */}

      {/* blog */}
      <section> 
        <div className="container mil-p-120-120">
          <div className="row">
              <PaginatedBlog
                items={posts}
              />
              
              <Pagination
                currentPage={currentPage}
                totalItems={totalPosts}
                perPage={PER_PAGE}
                renderPageLink={(page) => `/blog/page/${page}`}
              />
          </div>
        </div>
      </section>
      {/* blog end */}

      <SubscribeSection />

    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData( PER_PAGE, 1 );
  const categoriesData = await getSortedCategoriesData()
  const popularsData = await getFeaturedPostsData(PopularsPostsData.featured)

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,
      categories: categoriesData,
      popular: popularsData
    }
  }
}