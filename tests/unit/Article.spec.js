import { shallowMount } from "@vue/test-utils";
import Article from "@/components/Article.vue";

test("Should render the title and status that was passed", () => {
  const wrapper = shallowMount(Article, {
    props: {
      article: {
        title: "Django Testing #1: Create tests using Pytest",
        status: "In Progress"
      }
    }
  });
  const div = wrapper.find(".article");
  const span = div.find("span");
  expect(div.text()).toContain("Django Testing #1: Create tests using Pytest");
  expect(span.text()).toBe("In Progress");
});
