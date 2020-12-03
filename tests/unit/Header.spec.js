import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

test("Should render the word Remembrall in the Home page's Header", () => {
  const wrapper = shallowMount(Header);
  const heading = wrapper.find("h1");
  expect(heading.text()).toBe("Remembrall");
});
