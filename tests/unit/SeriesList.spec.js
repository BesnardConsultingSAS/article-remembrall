import { mount, createLocalVue } from "@vue/test-utils";
import SeriesList from "@/components/SeriesList.vue";
import VueRouter from 'vue-router';

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe("SeriesList.vue", () => {
    it("When clicking Add Series button, it should redirect the user to /series/new page.", () => {
        const wrapper = mount(SeriesList, {
            localVue,
            router
        })
        const addSeriesButton = wrapper.find('button')
        addSeriesButton.trigger('click')
        expect(window.location.href).toBe('/series/new')
    });
});
