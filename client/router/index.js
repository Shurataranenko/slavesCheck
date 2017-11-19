import Crusovice from '../components/Crusovice/Crusovice.vue';
import Holsten from '../components/Holsten/Holsten.vue';


export default [
   {
      path: '/', redirect: '/crusovice'
   },
   {
      path: '/crusovice',
      component: Crusovice
   },
   {
   	path: '/holsten',
   	component: Holsten
   }
];
