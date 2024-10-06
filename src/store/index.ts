import { createStore, StoreOptions } from 'vuex';
import { ProductItem } from '../lib/productTypes';
import itemsFromFile from '/src/info/items.json';

export default createStore({
    state: {
        items: itemsFromFile,
        sorted: 0,
        filtered: false
    },
    mutations: {
        changeSort(state: StoreOptions, id: number): void {
            state.sorted = id;
            if (id === 1) {
                state.items.sort((a: ProductItem, b: ProductItem) =>
                    a.price.current_price - b.price.current_price);
            } else if (id === 2) {
                state.items.sort((a: ProductItem, b: ProductItem) =>
                    b.price.current_price - a.price.current_price);
            } else {
                return;
            }
        },
        filter(state: StoreOptions, material: number): void {
            state.items = itemsFromFile.filter((item: ProductItem) =>
                item.material === material
            );
            this.commit('changeSort', state.sorted);
        }
    },
});