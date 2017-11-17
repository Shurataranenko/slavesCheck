export default {
   data () {
      return {
         beer: 'Holsten',
         pros: [
            // nothing here
         ],
         cons: [
            {
               text: 'Price',
               value: 5
            },
            {
               text: 'Horse label',
               value: 5
            },
            {
               text: 'Quality',
               value: 3
            }
         ]
      }
   },
   computed: {
      totalPro() {
         return 0;
      },
      totalCons() {
         return this.cons.reduce((total, cons) => total + cons.value, 0);
      },
      overal() {
         return this.totalPro - this.totalCons;
      }
   }
}
