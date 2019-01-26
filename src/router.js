import Vue from 'vue';
import VueRouter from 'vue-router';

// 追加したコンポーネントはインポートする
import Home from '@/pages/Home.vue';
import SearchIp from '@/pages/SearchIp.vue';
import Test from '@/pages/Test.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  // ここにページのパスとコンポーネントを書く
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search_ip',
      component: SearchIp
    },
    {
      path: '/test_page',
      component: Test
    }
  ]
});

export default router;
