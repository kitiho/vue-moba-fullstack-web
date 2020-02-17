<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/swiper1.jpeg"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/swiper2.jpeg"
          alt=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/swiper3.jpeg"
          alt=""
        >
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div
          class="nav-item mb-3"
          v-for="n in 13"
          :key="n"
        >
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card icon="info" title="英雄列表" :categories="newsCats"></m-list-card>
    <m-card icon='info' title="英雄列表"></m-card>
    <m-card icon='info' title="精彩视频"></m-card>
    <m-card icon='info' title="图文攻略"></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        newsCats:[
            {
                name:'热门',
                newsList:new Array(5).fill(1).map(v=>({
                    categoryName:'公告',
                    title:'王者营地2月14日-15日登录异常说明公告',
                    data:'02/16'
                }))
            },
            {
                name:'新闻',
                newsList:new Array(5).fill(1).map(v=>({
                    categoryName:'公告',
                    title:'王者营地2月14日-15日登录异常说明公告',
                    data:'02/16'
                }))
            },
            {
                name:'新闻',
                newsList:new Array(5).fill(1).map(v=>({
                    categoryName:'公告',
                    title:'王者营地2月14日-15日登录异常说明公告',
                    data:'02/16'
                }))
            },
            {
                name:'新闻',
                newsList:new Array(5).fill(1).map(v=>({
                    categoryName:'公告',
                    title:'王者营地2月14日-15日登录异常说明公告',
                    data:'02/16'
                }))
            },
            {
                name:'新闻',
                newsList:new Array(5).fill(1).map(v=>({
                    categoryName:'公告',
                    title:'王者营地2月14日-15日登录异常说明公告',
                    data:'02/16'
                }))
            },
        ],
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
