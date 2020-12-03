import { mount } from "@vue/test-utils";
import AddSeries from "../../src/views/AddSeries";
import store from "@/store";

import App from "../../src/App";
test("Series List should update when Add Series form is submitted.", async () => {
  const appWrapper = mount(App, {
    global: {
      plugins: [store]
    }
  });
  expect(appWrapper.findAll('[data-test="series-list"]')).toHaveLength(2);

  const addSeriesWrapper = mount(AddSeries);
  const addSeriesForm = addSeriesWrapper.find("form");

  await addSeriesWrapper
    .get('[data-test="new-series-title"]')
    .setValue("Introduction to Vue");
  await addSeriesForm.trigger("submit");

  expect(appWrapper.findAll('[data-test="series-list"]')).toHaveLength(3);
});
