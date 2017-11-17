export default {
   data () {
      return {
         beer: 'Crusovice',
         pros: [
            {
               text: 'Taste',
               value: 5
            },
            {
               text: 'Price',
               value: 5
            },
            {
               text: 'Awesomness',
               value: 5
            }
         ],
         cons: [
            //None
         ]
      }
   },
   computed: {
      totalPro() {
         return this.pros.reduce((total, pro) => total + pro.value, 0);
      },
      totalCons() {
         return 0; //impl
      },
      overall() {
         return this.totalProc - this.totalCons;
      }
   }
}
