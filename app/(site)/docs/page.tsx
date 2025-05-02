import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page",

  // other metadata
  description: ""
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Lorem ipsum dolor sit amet.</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ad laborum libero? Aperiam optio, rem provident quam cupiditate aspernatur non itaque saepe deleniti? Ad consectetur perferendis vero quae quos necessitatibus libero odit, recusandae ex minima sunt sit vitae eaque adipisci. Ut adipisci odit reprehenderit qui autem recusandae dignissimos illo maxime.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad ducimus consequatur blanditiis aliquam expedita, molestias aut laborum deserunt repellat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
