import Staropramen from '../components/Staropramen/Staropramen.vue';
import Crusovice from '../components/Crusovice/Crusovice.vue';

export default [
   {
      path: '/', redirect: '/crusovice'
   },
   {
      path: '/staropramen',
      component: Staropramen
   },
   {
   path: '/crusovice',
   component: Crusovice
   }
];
