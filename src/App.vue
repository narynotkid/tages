<template>
  <div class="container">
    <BreadcrumbsComponent/>

    <header class="container__head-title">
      <span class="head-title-text">
        Комплекты стеллажных систем
      </span>
    </header>

    <div class="filters-container">
      <CustomSelect
          title="Сортировать по"
          :items="[{ id: 1, name: 'По возрастанию' }, { id: 2, name: 'По убыванию' }]"
          @selected-item-update="changeSort"
      />
      <CustomSelect
          title="Материал"
          :items="material"
          @selected-item-update="filterItems"
      />
    </div>

    <main class="products-container">
      <ProductCard
          v-for="productItem in store.state.items"
          :productItem="productItem"
          :key="productItem.id"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
import BreadcrumbsComponent from './components/BreadcrumbsComponent.vue';
import CustomSelect from './components/CustomSelect.vue';
import material from './info/materials.json';
import { useStore } from 'vuex';
import { FilterItemType } from './lib/filterItemType';

const store = useStore();

const changeSort = (item: FilterItemType) => {
  store.commit('changeSort', item.id);
};

const filterItems = (item: FilterItemType) => {
  store.commit('filter', parseInt(item.id));
};

</script>

<style scoped lang="scss">
.container {
  margin: 32px 216px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1136px) {
    margin: 32px 108px;
  }

  .filters-container {
    display: flex;
    flex-direction: row;
    @media(max-width: 865px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .container__head-title {
    margin-top: 32px;
    margin-bottom: 28px;

    .head-title-text {
      font-family: 'SF Pro Display', sans-serif;
      font-size: 36px;
      line-height: 48px;
      font-weight: 500;
    }
  }

  .products-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 920px) {
      justify-content: center;
    }
  }
}
</style>
