<template>
  <div class="product-card">
    <div class="product-card__image-container">
      <span
          v-if="productItem.price?.old_price"
          class="product-card__discount-rect"
      >
        Скидка
      </span>
      <img
          class="product-card__image"
          :src="productItem.image.url"
          :alt="productItem.name"
      />
    </div>

    <div class="product-card__info">
      <div class="product-card__product-code">
        {{ productItem.code ?? '' }}
      </div>
      <div class="product-card__product-name">
        {{ productItem.name }}
      </div>

      <div class="product-card__info__bottom-container">

        <div class="price-container">
          <div
              v-if="productItem.price?.old_price"
              class="old-price"
          >
            {{ productItem.price.old_price }}₽
          </div>
          <div class="current-price">
            {{ productItem.price.current_price }}₽
          </div>
        </div>

        <div class="product-card__actions-container">
          <div
              class="add-to-cart icon"
              @click="addOrDeleteFromStorages('cartItems')"
          >
            <img
                :src="isInCart ? '/src/assets/img/ok.png'
                : '/src/assets/img/buy.png'"
                alt="Добавить в корзину"
            />
          </div>
          <div
              class="add-to-favorite icon"
              @click="addOrDeleteFromStorages('favoriteItems')"
          >
            <img
                :src="isFavorite ? '/src/assets/img/ok.png'
                : '/src/assets/img/favorite.png'"
                alt="Добавить в избранное"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductItem } from '../lib/productTypes';
import { onBeforeMount, ref } from 'vue';

interface Props {
  productItem: ProductItem;
}

const isFavorite = ref(false);
const isInCart = ref(false);

const props = defineProps<Props>();

let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));
let cartItems = JSON.parse(localStorage.getItem('cartItems'));

onBeforeMount(() => {
  if (Array.isArray(favoriteItems) && favoriteItems.indexOf(props.productItem.id) !== -1) {
    isFavorite.value = true;
  }

  if (Array.isArray(cartItems) && cartItems.indexOf(props.productItem.id) !== -1) {
    isInCart.value = true;
  }
});

const addOrDeleteFromStorages = (key: string): void => {
  let items = JSON.parse(localStorage.getItem(key));

  let isInStorage: boolean;

  key === 'cartItems' ? isInStorage = isInCart.value : isInStorage = isFavorite.value;

  if (isInStorage) {
    items.splice(items.indexOf(props.productItem.id), 1);
    localStorage.setItem(key, JSON.stringify(items));
  } else {
    if (items !== null) {
      items.push(props.productItem.id);
      localStorage.setItem(key, JSON.stringify(items));
    } else {
      items = [];
      items.push(props.productItem.id);
      localStorage.setItem(key, JSON.stringify(items));
    }
  }

  key === 'cartItems' ? isInCart.value = !isInCart.value : isFavorite.value = !isFavorite.value;
};
</script>

<style lang="scss">
.product-card {
  width: 336px;
  height: 352px;
  border: 1px solid #EEEEEE;
  margin-bottom: 40px;
  @media(max-width: 545px) {
    height: 300px;
  }

  .product-card__discount-rect {
    width: 81px;
    height: 24px;
    background: rgba(235, 87, 87, 0.92);
    margin-top: 8px;
    text-align: center;
    font-family: 'SF Pro Display Medium', sans-serif;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: white;
    position: absolute;
    z-index: 100;
  }

  .product-card__image {
    width: 238px;
    height: 237px;
    left: 49px;
    top: 8px;
    position: relative;

    @media(max-width: 583px) {
      width: 216px;
      height: 216px;
    }

    @media(max-width: 545px) {
      width: 183px;
      height: 183px;
    }
  }

  .product-card__info {
    padding-top: 25px;
    padding-left: 15px;
    letter-spacing: 0.04em;

    .product-card__product-code {
      color: #888888;
      font-family: 'San Francisco', sans-serif;
      font-size: 10px;
      min-height: 14px;
      font-weight: 400;
      &:after {
        content: '';
        visibility: visible;
      }
    }

    .product-card__product-name {
      padding-top: 10px;
      font-family: 'San Francisco', sans-serif;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .product-card__info__bottom-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .price-container {
        padding-top: 10px;
        letter-spacing: 0.05em;
        font-family: 'San Francisco', sans-serif;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        flex-direction: row;

        .old-price {
          color: gray;
          text-decoration: line-through;
          margin-right: 7px;
        }
      }

      .product-card__actions-container {
        display: flex;
        flex-direction: row;

        .icon {
          padding-right: 15px;
        }
      }
    }
  }
}
</style>