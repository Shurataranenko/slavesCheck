import Crusovice from '../components/Crusovice/Crusovice.vue';

export default [
   {
      path: '/', redirect: '/crusovice'
   },
   {
      path: '/crusovice',
      component: Crusovice
   }
];
