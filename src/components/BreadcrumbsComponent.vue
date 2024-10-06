<template>
  <div class="breadcrumbs-container">
    <span>
      Главная
    </span>
    <span>
      /
    </span>
    <span>
      Системы хранения
    </span>
    <span>
      /
    </span>
    <span>
      Комплекты стеллажных систем
    </span>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs-container {
  display: flex;
  flex-direction: row;
  & > span {
    font-family: 'San Francisco', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-align: left;
    margin-right: 13px;
    cursor: pointer;
    color: gray;
    font-weight: 400;
  }

  & span:last-child {
    color: black;
  }
}
</style>