<template>
  <div
      class="custom-select"
      tabindex="1"
      @focus="isDropdownListActive = true"
      @focusout="isDropdownListActive = false"
      ref="selector"
  >
    <span class="custom-select__title">
      {{ title }}:
    </span>
    <div :class="isDropdownListActive ? 'custom-select__container open' : 'custom-select__container'">
      {{ selectedItem.name }}
    </div>
    <div
        v-if="isDropdownListActive"
        class="drop-down-list"
    >
      <div
          v-for="item in items"
          :class="item.name === selectedItem.name ? 'drop-down-list__item active' : 'drop-down-list__item'"
          :key="item.id"
          @click="onItemClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FilterItemType } from '../lib/filterItemType';

interface Props {
  title: string,
  items: FilterItemType[]
}

defineProps<Props>();
const emit = defineEmits(['selectedItemUpdate']);

const selector = ref();

const selectedItem = ref({
  id: 0,
  name: 'Не выбрано'
});

const onItemClick = (item: FilterItemType) => {
  selectedItem.value = item;
  selector.value.blur();
  emit('selectedItemUpdate', selectedItem.value);
};

const isDropdownListActive = ref(false);
</script>

<style scoped lang="scss">
.custom-select {
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-bottom: 40px;

  .custom-select__title {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: #7c7c7c;
    padding-left: 15px;
    margin-bottom: 5px;
    width: 288px;
    align-self: center;

    @media(max-width: 865px) {
      text-align: end;
    }
  }

  .custom-select__container {
    width: 288px;
    height: 40px;
    position: relative;
    margin: 0 auto;

    background: #F2F2F2;
    outline: none;
    cursor: pointer;

    padding-left: 15px;

    font-family: 'SF Pro Display', sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    letter-spacing: 0.03em;

    align-content: center;

    &:after {
      content: url("/src/assets/img/arrow.png");
      width: 0;
      height: 0;
      position: absolute;
      right: 36px;
      top: 45%;
      margin-top: -6px;
    }

    &.open:after {
      content: url("/src/assets/img/arrow.png");
      transform: rotateX(180deg);
      width: 0;
      height: 0;
      position: absolute;
      right: 36px;
      top: 85%;
      margin-top: -6px;
    }
  }

  .drop-down-list {
    z-index: 1000;
    position: absolute;
    margin-top: 63px;
    width: 288px;

    .drop-down-list__item {
      min-height: 40px;
      background-color: #F2F2F2;
      font-family: 'SF Pro Display', sans-serif;
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      padding-left: 15px;
      align-content: center;
      cursor: pointer;

      &.active {
        background-color: #a6a6a6;
      }

      &.active:hover {
        background-color: #a6a6a6;
      }

      &:hover {
        background-color: #c6c6c6;
      }
    }
  }
}
</style>
